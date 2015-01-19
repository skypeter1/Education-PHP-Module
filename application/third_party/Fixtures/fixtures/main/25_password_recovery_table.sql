CREATE TABLE IF NOT EXISTS `{db_name}`.`password_recovery` (
`user_id` INT NOT NULL ,
`hash` VARCHAR( 32 ) NOT NULL ,
`expiration_date` INT( 14 ) NOT NULL
)
