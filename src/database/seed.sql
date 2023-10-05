PRAGMA foreign_keys = OFF;

BEGIN;

INSERT INTO users VALUES
  (1, 'a@example.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2023-10-10 00:00:00'),
  (2, 'b@example.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2023-10-10 00:00:00'),
  (3, 'c@example.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2023-10-10 00:00:00'),
  (4, 'd@example.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2023-10-10 00:00:00'),
  (5, 'e@example.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2023-10-10 00:00:00'),
  (6, 'f@example.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2023-10-10 00:00:00'),
  (7, 'g@example.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2023-10-10 00:00:00')
ON CONFLICT DO NOTHING;

INSERT INTO events VALUES
  (1, 1, 'Picnic in the park', '2023-10-14 00:00:00', '2023-10-10 00:00:00'),
  (2, 2, 'concert - Roisin Murphy', '2023-10-22 00:00:00', '2023-10-10 00:00:00'),
  (3, 3, 'Birthday party', '2023-10-13 00:00:00', '2023-10-10 00:00:00'),
  (4, 1, 'Something nice', '2023-10-30 00:00:00', '2023-10-10 00:00:00'),
  (5, 1, 'Some sort of activity', '2023-10-08 00:00:00', '2023-10-10 00:00:00'),
  (6, 4, 'An example thing', '2023-11-10 00:00:00', '2023-10-10 00:00:00'),
  (7, 3, 'Walk', '2023-10-17 00:00:00', '2023-10-10 00:00:00'),
  (8, 3, 'Look at the moon', '2023-12-10 00:00:00', '2023-10-10 00:00:00'),
  (9, 2, 'Do a backflip', '2023-09-10 00:00:00', '2023-10-10 00:00:00'),
  (10, 5, 'Learn to ride a bike', '2023-10-11 00:00:00', '2023-10-10 00:00:00'),
  (11, 1, 'Win the lottery', '2023-10-27 00:00:00', '2023-10-10 00:00:00')
ON CONFLICT DO NOTHING;

INSERT INTO partners VALUES
  (1,2),
  (1,4),
  (1,6),
  (2,3),
  (2,5),
  (3,5),
  (3,7),
  (4,5),
  (4,6)
ON CONFLICT DO NOTHING;

COMMIT;

PRAGMA foreign_keys = ON;