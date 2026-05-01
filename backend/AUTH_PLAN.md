# SmallBiz — Authentication Backend Plan

This document details every route, controller function, and MongoDB schema field
planned for the Authentication module. Based on a full analysis of the frontend
pages: `LoginPage.jsx`, `SignupPage.jsx`, and `OnboardingPage.jsx`.

---

## 1. MongoDB Schema — `models/User.js`

### Full Schema Fields

| Field           | Type     | Required | Notes                                              |
|-----------------|----------|----------|----------------------------------------------------|
| `name`          | String   | ✅ Yes   | Full name from signup form                         |
| `email`         | String   | ✅ Yes   | Unique, lowercase, used as login identifier        |
| `password`      | String   | ✅ Yes   | Bcrypt hashed — NEVER stored as plain text         |
| `businessName`  | String   | ✅ Yes   | Collected during signup                            |
| `role`          | String   | No       | Enum: `['owner', 'admin', 'member']`, default: `owner` |
| `googleId`      | String   | No       | Populated only for Google OAuth users              |
| `whatsappNumber`| String   | No       | For WhatsApp login option                          |
| `isOnboarded`   | Boolean  | No       | Default: `false`. Set to `true` after onboarding  |
| `onboarding`    | Object   | No       | Nested object — see below                         |
| `createdAt`     | Date     | Auto     | Mongoose timestamps                                |
| `updatedAt`     | Date     | Auto     | Mongoose timestamps                                |

### Onboarding Nested Object (stored inside User)

| Field         | Type   | Notes                                                   |
|---------------|--------|---------------------------------------------------------|
| `industry`    | String | e.g., "Retail", "Food & Beverage", "Services", etc.     |
| `teamSize`    | String | e.g., "Just me", "2–5", "6–20", "20+"                  |
| `primaryGoal` | String | e.g., "Manage Contacts", "Track Deals", "Send Invoices" |

### Schema Preview (Mongoose)

```js
const UserSchema = new mongoose.Schema({
  name:           { type: String, required: true, trim: true },
  email:          { type: String, required: true, unique: true, lowercase: true },
  password:       { type: String, required: true, minlength: 8 },
  businessName:   { type: String, required: true, trim: true },
  role:           { type: String, enum: ['owner', 'admin', 'member'], default: 'owner' },
  googleId:       { type: String, default: null },
  whatsappNumber: { type: String, default: null },
  isOnboarded:    { type: Boolean, default: false },
  onboarding: {
    industry:    { type: String, default: '' },
    teamSize:    { type: String, default: '' },
    primaryGoal: { type: String, default: '' },
  },
}, { timestamps: true });
```

---

## 2. Auth Routes — `routes/auth.js`

All routes are prefixed with `/api/auth`

| Method | Endpoint             | Controller Function   | Auth Required | Description                            |
|--------|----------------------|-----------------------|---------------|----------------------------------------|
| POST   | `/api/auth/register` | `registerUser`        | ❌ No         | Create new user account                |
| POST   | `/api/auth/login`    | `loginUser`           | ❌ No         | Login with email + password            |
| POST   | `/api/auth/logout`   | `logoutUser`          | ✅ Yes (JWT)  | Invalidate token / clear session       |
| GET    | `/api/auth/me`       | `getMe`               | ✅ Yes (JWT)  | Get currently logged-in user profile   |
| POST   | `/api/auth/onboarding` | `completeOnboarding` | ✅ Yes (JWT) | Save industry, teamSize, primaryGoal   |
| PUT    | `/api/auth/update-profile` | `updateProfile`  | ✅ Yes (JWT) | Update name, businessName, phone       |
| PUT    | `/api/auth/change-password` | `changePassword`| ✅ Yes (JWT) | Old password verify + set new password |

---

## 3. Controller Functions — `controllers/authController.js`

### `POST /api/auth/register` → `registerUser`
**Input:** `{ name, email, businessName, password }`
**Logic:**
1. Check if user with `email` already exists → 400 if yes
2. Hash password using `bcryptjs` (salt rounds: 10)
3. Create new `User` document in MongoDB
4. Generate JWT token (`jsonwebtoken`) with `userId` payload
5. Return `{ token, user: { id, name, email, businessName, isOnboarded } }`

---

### `POST /api/auth/login` → `loginUser`
**Input:** `{ email, password }`
**Logic:**
1. Find user by `email` → 401 if not found
2. Compare plain password with hashed password using `bcrypt.compare()`
3. If mismatch → 401 "Invalid credentials"
4. Generate JWT token
5. Return `{ token, user: { id, name, email, businessName, isOnboarded } }`
> Note: `rememberMe` is handled entirely on the frontend (localStorage vs sessionStorage). The backend simply returns the token; expiry can optionally be extended.

---

### `POST /api/auth/logout` → `logoutUser`
**Input:** JWT in `Authorization: Bearer <token>` header
**Logic:**
1. (Stateless JWT — no server-side session to invalidate)
2. Return `{ message: 'Logged out successfully' }`
> Frontend is responsible for deleting the token from storage.

---

### `GET /api/auth/me` → `getMe`
**Input:** JWT in `Authorization` header
**Logic:**
1. Decode token via `protect` middleware
2. Fetch user from DB by `req.user.id` (exclude `password` field)
3. Return full user object

---

### `POST /api/auth/onboarding` → `completeOnboarding`
**Input:** `{ industry, teamSize, primaryGoal }`
**Logic:**
1. Decode token via `protect` middleware
2. Update `user.onboarding` fields
3. Set `user.isOnboarded = true`
4. Save and return updated user

---

### `PUT /api/auth/update-profile` → `updateProfile`
**Input:** `{ name, businessName, whatsappNumber }`
**Logic:**
1. Validate fields
2. Update user document
3. Return updated user (no password)

---

### `PUT /api/auth/change-password` → `changePassword`
**Input:** `{ oldPassword, newPassword }`
**Logic:**
1. Fetch user with password field included
2. Verify `oldPassword` with `bcrypt.compare()`
3. Hash `newPassword` and save
4. Return `{ message: 'Password changed successfully' }`

---

## 4. Middleware — `middlewares/protect.js`

This middleware will be applied to all protected routes.

**Logic:**
1. Read `Authorization` header → expect `Bearer <token>`
2. If missing → 401 "No token provided"
3. Verify token using `jwt.verify(token, process.env.JWT_SECRET)`
4. If invalid/expired → 401 "Token is not valid"
5. Attach decoded user to `req.user`
6. Call `next()`

---

## 5. Required npm Packages

```bash
npm install bcryptjs jsonwebtoken
```

| Package       | Purpose                            |
|---------------|------------------------------------|
| `bcryptjs`    | Hashing and comparing passwords    |
| `jsonwebtoken`| Generating and verifying JWT tokens|

---

## 6. New `.env` Variables Needed

```env
PORT=5000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRES_IN=7d
```

---

## 7. File Structure After Implementation

```
backend/
├── config/
│   └── db.js
├── controllers/
│   └── authController.js     ← All 7 functions above
├── middlewares/
│   └── protect.js            ← JWT auth middleware
├── models/
│   └── User.js               ← Full schema above
├── routes/
│   └── auth.js               ← All 7 routes wired up
├── app.js                    ← Mount: app.use('/api/auth', authRoutes)
└── index.js
```
