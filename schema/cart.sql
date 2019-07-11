create table cart (
    id serial primary key not null,
    user_id int REFERENCES user_table(id) not null,
    product_id int REFERENCES product(id) not null,
    purchased boolean,
    date_added date not null
)