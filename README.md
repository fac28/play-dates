# Play Dates

Play Dates is a shared calendar app

## Remote Deployment

This app is deployed on fly.io and can be accessed at: <https://play-dates.fly.dev/>

## Installation

Clone the project

```bash
  git clone https://github.com/fac28/play-dates.git
```

Go to the project directory

```bash
  cd play-dates
```

Install dependencies

```bash
  npm install
```

<!-- Seed the database
```bash
  npm run seed
``` -->

Start the server

```bash
  npm run start
```

## Database Schema

This app includes a database for a shared calendar. It has tables for users, sessions, events and partners. It's helpful to know the structure of the database before working with it. You can either read `database/schema.sql`, or expand the sections below.

<details>
<summary><code>users</code></summary>

| column     | type     | constraints               |
| ---------- | -------- | ------------------------- |
| id         | integer  | primary key autoincrement |
| email      | text     | unique                    |
| hash       | text     |                           |
| created_at | datetime | DEFAULT CURRENT_TIMESTAMP |

</details>

<details>
<summary><code>sessions</code></summary>

| column     | type     | constraints               |
| ---------- | -------- | ------------------------- |
| sid         | text  | primary key |
| user_id    | integer  | references users(id)      |
| expires_at | datetime | not null                  |
| created_at | datetime | DEFAULT CURRENT_TIMESTAMP |

</details>

<details>
<summary><code>events</code></summary>

| column     | type     | constraints               |
| ---------- | -------- | ------------------------- |
| id         | integer  | primary key autoincrement |
| user_id    | integer  | references users(id)      |
| content    | text     |                           |
| event_date | datetime | NOT NULL |
| created_at | datetime | DEFAULT CURRENT_TIMESTAMP |

</details>

<details>
<summary><code>partners</code></summary>

| column     | type     | constraints               |
| ---------- | -------- | ------------------------- |
| user_id    | integer  | references users(id)      |
| partner_id    | integer  | references users(id)      |
| ||PRIMARY KEY (user_id, partners_id)|
</details>

## Usage

to be added

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
