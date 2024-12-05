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

-- Grant access to owner automatically when creating a new folder

CREATE OR REPLACE FUNCTION insert_access_on_folder_creation()
RETURNS trigger AS
$$
BEGIN
    INSERT INTO access (folder_id, user_id) 
    VALUES (NEW.id, NEW.owner_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER insert_access_after_folder_creation
AFTER INSERT ON folders
FOR EACH ROW
EXECUTE FUNCTION insert_access_on_folder_creation();

-- insert test

INSERT INTO users (avatar, name, password) VALUES (NULL, 'testuser', 'test');
INSERT INTO folders (title, icon, owner_id) VALUES ('testfolder', 'icon_path', 1);
INSERT INTO contents (text, title, folder_id) VALUES ('This is some text content.', 'Test Content', 1);
INSERT INTO pictures (file, folder_id) VALUES ('image_file_path', 1);
INSERT INTO comments (text, picture_id) VALUES ('This is a comment on the picture.', 1);
INSERT INTO tags (name) VALUES ('tag1');
INSERT INTO tag_content (content_id, tag_id) VALUES (1, 1);
INSERT INTO tag_picture (picture_id, tag_id) VALUES (1, 1);