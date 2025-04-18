-- MySQL Script generated by MySQL Workbench
-- dom 13 abr 2025 16:34:31
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema purfection
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `purfection` ;

-- -----------------------------------------------------
-- Schema purfection
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `purfection` DEFAULT CHARACTER SET utf8 ;
USE `purfection` ;

-- -----------------------------------------------------
-- Table `purfection`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `purfection`.`user` ;

CREATE TABLE IF NOT EXISTS `purfection`.`user` (
  `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(128) NOT NULL,
  `password` VARCHAR(80) NOT NULL,
  `role` ENUM('client', 'caretaker') NOT NULL DEFAULT 'client',
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `purfection`.`cat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `purfection`.`cat` ;

CREATE TABLE IF NOT EXISTS `purfection`.`cat` (
  `cat_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` INT UNSIGNED NOT NULL,
  `neuter` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `comments` VARCHAR(300) NOT NULL,
  `special_needs` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `breed` VARCHAR(45) NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `image` VARCHAR(300) NULL,
  PRIMARY KEY (`cat_id`),
  INDEX `fk_cat_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_cat_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `purfection`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `purfection`.`appointment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `purfection`.`appointment` ;

CREATE TABLE IF NOT EXISTS `purfection`.`appointment` (
  `appointment_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `description` VARCHAR(400) NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `creation_date` DATE NULL,
  `accepted` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `caretaker_id` INT UNSIGNED,
  PRIMARY KEY (`appointment_id`),
  INDEX `fk_appointment_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_appointment_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `purfection`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `purfection`.`cat_has_appointment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `purfection`.`cat_has_appointment` ;

CREATE TABLE IF NOT EXISTS `purfection`.`cat_has_appointment` (
  `appointment_id` INT UNSIGNED NOT NULL,
  `cat_id` INT UNSIGNED NOT NULL,
  INDEX `fk_cat_has_appointment_appointment1_idx` (`appointment_id` ASC) VISIBLE,
  INDEX `fk_cat_has_appointment_cat1_idx` (`cat_id` ASC) VISIBLE,
  CONSTRAINT `fk_cat_has_appointment_appointment1`
    FOREIGN KEY (`appointment_id`)
    REFERENCES `purfection`.`appointment` (`appointment_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_cat_has_appointment_cat1`
    FOREIGN KEY (`cat_id`)
    REFERENCES `purfection`.`cat` (`cat_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
