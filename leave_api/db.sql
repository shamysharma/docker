SET ROLE 'postgres';

CREATE table if not exists leaves (
    id serial primary key, 
    name varchar(200) NOT NULL, 
    leave_type text NOT NULL,
    from_date date NOT NULL,
    to_date date NOT NULL,
    team_name varchar(200) NOT NULL,
    sick_leaves_file VARCHAR(200),
    reporter text NOT NULL
);