# Backend Database Schema Analysis & Specifications

This document outlines the complete database structure for the **Divya Homestay / Pendora Glamps** backend system.

---

## 1. Existing Backend Collections / Tables

### A. `users` (User Collection)
Stores registered standard users.
- **`_id`** (`ObjectId` / `UUID`): Primary Key.
- **`name`** (`String`, Required): Full name of the user.
- **`email`** (`String`, Required, Unique): User email address.
- **`password`** (`String`, Optional): Hashed user password (optional if social auth is used).
- **`createdAt`** (`Date`): Timestamp of creation.
- **`updatedAt`** (`Date`): Timestamp of last update.

---

### B. `admins` (Admin Collection)
Stores administrative users with authorization privileges.
- **`_id`** (`ObjectId` / `UUID`): Primary Key.
- **`name`** (`String`, Required): Admin name.
- **`email`** (`String`, Required, Unique): Admin email (validated `@gmail.com`).
- **`mobile`** (`String`, Required, Unique): 10-digit mobile number.
- **`password`** (`String`, Required): Hashed password (Bcrypt).
- **`role`** (`String`, Enum: `["admin", "superadmin"]`, Default: `"admin"`).
- **`isActive`** (`Boolean`, Default: `true`): Account active status.
- **`createdAt`** (`Date`): Timestamp of creation.
- **`updatedAt`** (`Date`): Timestamp of last update.

---

### C. `experiences` (Experience Collection)
Stores homestay experiences, activities, and local attraction posts managed by admins.
- **`_id`** (`ObjectId` / `UUID`): Primary Key.
- **`title`** (`String`, Required): Title of the experience.
- **`description`** (`String`, Required): Detailed description.
- **`images`** (`Array<String>`): URLs of uploaded images (Cloudinary integration).
- **`createdAt`** (`Date`): Timestamp of creation.
- **`updatedAt`** (`Date`): Timestamp of last update.

---

### D. `availabilities` (Room Availability Collection)
Tracks blocked or booked dates for specific rooms.
- **`_id`** (`ObjectId` / `UUID`): Primary Key.
- **`roomId`** (`String`, Required, Unique): Identifier for room (e.g., `"room1"`, `"room2"`).
- **`unavailableDates`** (`Array<String>`): Array of ISO date strings (`YYYY-MM-DD`) when room is unavailable.

---

## 2. Recommended Additional Tables (For Full Feature Completeness)

### E. `rooms` (Rooms / Accommodations)
- **`_id`** / **`id`**: Primary Key.
- **`roomId`**: Unique string identifier.
- **`title`**: Room name.
- **`description`**: Detailed room features.
- **`capacity`**: Maximum guest capacity.
- **`pricePerNight`**: Rate per night.
- **`images`**: Array of room image URLs.

---

### F. `bookings` (Reservations)
- **`_id`** / **`id`**: Primary Key.
- **`userId`**: Reference to User.
- **`roomId`**: Room identifier.
- **`checkInDate`**: Check-in date.
- **`checkOutDate`**: Check-out date.
- **`guestsCount`**: Number of guests.
- **`totalAmount`**: Total booking cost.
- **`status`**: Enum (`"pending"`, `"confirmed"`, `"cancelled"`).

---

### G. `contact_inquiries` (Contact Form Submissions)
- **`_id`** / **`id`**: Primary Key.
- **`name`**: Guest name.
- **`email`**: Guest email.
- **`phone`**: Guest phone number.
- **`message`**: Message body.
- **`status`**: Enum (`"unread"`, `"read"`, `"replied"`).

---

## 3. Schema Files Created in Backend Root (`/server`)

1. **`schema.sql`**: Full SQL script for creating tables in PostgreSQL / MySQL.
2. **`SCHEMA.md`**: Complete documentation breakdown of models and fields.
