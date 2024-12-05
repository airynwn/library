DROP TABLE IF EXISTS tag_content CASCADE;
DROP TABLE IF EXISTS tag_picture CASCADE;
DROP TABLE IF EXISTS tags CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS pictures CASCADE;
DROP TABLE IF EXISTS contents CASCADE;
DROP TABLE IF EXISTS access CASCADE;
DROP TABLE IF EXISTS folders CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
                id          bigserial       PRIMARY KEY,
                avatar      text,
                name        varchar(255)    NOT NULL UNIQUE,
                password    varchar(255)    NOT NULL        
                -- TODO crypt
);

CREATE TABLE folders (
                id          bigserial       PRIMARY KEY,
                title       varchar(255)    NOT NULL UNIQUE,
                icon        text,
                owner_id bigint NOT NULL REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE access (
                folder_id bigint NOT NULL REFERENCES folders (id) ON DELETE CASCADE,
                user_id bigint NOT NULL REFERENCES users (id) ON DELETE CASCADE,
                PRIMARY KEY (folder_id, user_id)
);

CREATE TABLE contents (
                id          bigserial       PRIMARY KEY,
                text        text            NOT NULL,
                title       varchar(255)    NOT NULL,
                folder_id bigint NOT NULL REFERENCES folders (id) ON DELETE CASCADE
);

CREATE TABLE pictures (
                id          bigserial       PRIMARY KEY,
                file        text            NOT NULL,
                folder_id bigint NOT NULL REFERENCES folders (id) ON DELETE CASCADE
);

CREATE TABLE comments (
                id          bigserial       PRIMARY KEY,
                text        text            NOT NULL,
                picture_id bigint NOT NULL REFERENCES pictures (id) ON DELETE CASCADE

);

CREATE TABLE tags (
                id          bigserial       PRIMARY KEY,
                name        varchar(255)    NOT NULL UNIQUE
);

CREATE TABLE tag_content (
                content_id bigint NOT NULL REFERENCES contents (id) ON DELETE CASCADE,
                tag_id bigint NOT NULL REFERENCES tags (id) ON DELETE CASCADE,
                PRIMARY KEY (content_id, tag_id)
);


CREATE TABLE tag_picture (
                picture_id bigint NOT NULL REFERENCES pictures (id) ON DELETE CASCADE,
                tag_id bigint NOT NULL REFERENCES tags (id) ON DELETE CASCADE,
                PRIMARY KEY (picture_id, tag_id)
);