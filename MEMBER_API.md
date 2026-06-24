# Member API Documentation

## Overview
Members are separate from Users. A Member has a OneToOne relationship with a User entity. When creating a member, both the User (authentication) and Member (member-specific data) are created together. You can optionally assign a subscription (membership plan) when creating a member.

## Subscription Types
The system supports the following membership types:
- **DAILY** - 1 day duration
- **WEEKLY** - 7 days duration
- **MONTHLY** - 30 days duration
- **QUARTERLY** - 90 days duration
- **YEARLY** - 365 days duration

## Member Fields

### User Fields (Authentication)
- `firstName` (String) - First name
- `lastName` (String) - Last name
- `email` (String) - Email address (unique)
- `phone` (String) - Phone number
- `imagePath` (String) - Profile image path (optional)

### Member Fields (Member-specific)
- `dateOfBirth` (LocalDate) - Date of birth (ISO format: YYYY-MM-DD)
- `address` (String) - Physical address
- `emergencyContact` (String) - Emergency contact name
- `emergencyPhone` (String) - Emergency contact phone
- `notes` (String) - Additional notes (optional)

## API Endpoints

### Create Member
**POST** `/api/v1/member/create?membershipId={membershipId}`

**Query Parameters:**
- `membershipId` (optional) - ID of the membership plan to assign to the member

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "imagePath": "/images/john.jpg",
  "dateOfBirth": "1990-05-15",
  "address": "123 Main St, City, Country",
  "emergencyContact": "Jane Doe",
  "emergencyPhone": "+0987654321",
  "notes": "New member"
}
```

**Example with Monthly Subscription:**
```
POST /api/v1/member/create?membershipId=2
```

**Response:**
```json
{
  "memberPkId": 1,
  "uuid": "550e8400-e29b-41d4-a716-446655440000",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "imagePath": "/images/john.jpg",
  "dateOfBirth": "1990-05-15",
  "address": "123 Main St, City, Country",
  "emergencyContact": "Jane Doe",
  "emergencyPhone": "+0987654321",
  "joinDate": "2024-06-24",
  "notes": "New member"
}
```

### Update Member
**PUT** `/api/v1/member/{id}`

**Request Body:** Same as create

**Response:** Same as create

### Get All Members
**GET** `/api/v1/member/all`

**Response:** Array of member objects

### Get Member by ID
**GET** `/api/v1/member/{id}`

**Response:** Single member object

### Get Member by UUID
**GET** `/api/v1/member/uuid/{uuid}`

**Response:** Single member object

### Search Members
**GET** `/api/v1/member/search?query={searchTerm}`

Searches by first name, last name, or email.

**Response:** Array of matching member objects

### Delete Member
**DELETE** `/api/v1/member/{id}`

**Response:**
```json
{
  "message": "Member deleted successfully"
}
```

## Notes
- When creating a member, a default password is automatically set: `defaultPassword123`
- The user role is automatically set to `MEMBER`
- The account is automatically set to `unlocked`
- A UUID is automatically generated for both User and Member
- `joinDate` is automatically set to the current date
- If `membershipId` is provided, an active subscription is automatically created with:
  - Start date: current date
  - End date: current date + membership duration days
  - Status: ACTIVE

## Membership API

### Overview
Memberships define the subscription plans available for members. Each membership has a type, price, duration, and features.

### Membership Fields
- `membershipPkId` (Long) - Unique ID of the membership plan
- `name` (String) - Plan name (e.g., "Daily Pass", "Monthly Basic")
- `description` (String) - Description of the plan
- `type` (Enum) - DAILY, WEEKLY, MONTHLY, QUARTERLY, or YEARLY
- `price` (BigDecimal) - Cost of the plan
- `durationDays` (Integer) - How many days the subscription lasts
- `active` (Boolean) - Whether the plan is currently available
- `includesClasses` (Boolean) - Whether gym classes are included
- `includesPersonalTraining` (Boolean) - Whether personal training is included
- `maxClassesPerMonth` (Integer) - Maximum classes allowed per month (if applicable)

### Membership Endpoints

#### Get All Memberships
**GET** `/api/v1/membership/all`

**Response:**
```json
[
  {
    "membershipPkId": 1,
    "name": "Daily Pass",
    "description": "One day access to gym",
    "type": "DAILY",
    "price": 10.00,
    "durationDays": 1,
    "active": true,
    "includesClasses": false,
    "includesPersonalTraining": false,
    "maxClassesPerMonth": null
  },
  {
    "membershipPkId": 2,
    "name": "Monthly Basic",
    "description": "Monthly gym access",
    "type": "MONTHLY",
    "price": 50.00,
    "durationDays": 30,
    "active": true,
    "includesClasses": true,
    "includesPersonalTraining": false,
    "maxClassesPerMonth": 10
  },
  {
    "membershipPkId": 3,
    "name": "Yearly Premium",
    "description": "Full year access with all features",
    "type": "YEARLY",
    "price": 500.00,
    "durationDays": 365,
    "active": true,
    "includesClasses": true,
    "includesPersonalTraining": true,
    "maxClassesPerMonth": null
  }
]
```

#### Get Active Memberships
**GET** `/api/v1/membership/active`

Returns only memberships where `active = true`.

#### Get Membership by ID
**GET** `/api/v1/membership/{id}`

**Response:** Single membership object

#### Get Memberships by Type
**GET** `/api/v1/membership/type/{type}`

**Path Parameters:**
- `type` - DAILY, WEEKLY, MONTHLY, QUARTERLY, or YEARLY

**Response:** Array of memberships of the specified type

#### Create Membership
**POST** `/api/v1/membership`

**Request Body:**
```json
{
  "name": "Weekly Pass",
  "description": "7 days gym access",
  "type": "WEEKLY",
  "price": 25.00,
  "durationDays": 7,
  "active": true,
  "includesClasses": true,
  "includesPersonalTraining": false,
  "maxClassesPerMonth": 5
}
```

#### Update Membership
**PUT** `/api/v1/membership/{id}`

**Request Body:** Same as create

#### Delete Membership
**DELETE** `/api/v1/membership/{id}`

#### Deactivate Membership
**PUT** `/api/v1/membership/{id}/deactivate`

Sets `active = false` without deleting the record.

### Frontend Integration Tips
1. **Load memberships on member creation form**: Call `GET /api/v1/membership/active` to populate a dropdown
2. **Display membership details**: Show price, duration, and included features to help users choose
3. **Filter by type**: Use `GET /api/v1/membership/type/{type}` to show specific categories
4. **Handle null values**: `maxClassesPerMonth` can be null (unlimited classes)
5. **Format prices**: Price is a decimal, format as currency in your UI
