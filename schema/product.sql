create table product (
    id serial PRIMARY key,
    name varchar(100) not null,
    description varchar (500) not null,
    price decimal not null, 
    quanity int
)