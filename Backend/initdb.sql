\connect harlan_whatifcsh;

drop table if exists suggestions;

create table suggestions (
    description varchar(255) unique not null
    upvotes integer not null
    downvotes integer not null
);

alter table suggestions owner to harlan_whatifcsh;
