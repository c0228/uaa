-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 25, 2024 at 03:38 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vkac`
--

-- --------------------------------------------------------

--
-- Table structure for table `uk_info_courses`
--

DROP TABLE IF EXISTS `uk_info_courses`;
CREATE TABLE IF NOT EXISTS `uk_info_courses` (
  `reqid``` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `coursename` varchar(250) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `courselevel` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `duration` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `totalfees` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `appfees` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `initialdeposit` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `courseurl` varchar(250) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`reqid```),
  KEY `uid` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `uk_info_courses`
--

INSERT INTO `uk_info_courses` (`reqid```, `uid`, `coursename`, `courselevel`, `duration`, `totalfees`, `appfees`, `initialdeposit`, `courseurl`) VALUES
(1, 1, 'Occupational Therapy (Pre-registration) MSc', 'PG', '1', '18600', 'NA', 'NA', 'URL');

-- --------------------------------------------------------

--
-- Table structure for table `uk_info_uni`
--

DROP TABLE IF EXISTS `uk_info_uni`;
CREATE TABLE IF NOT EXISTS `uk_info_uni` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `uniname` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `location` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `campus` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nearbycity` varchar(250) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `gpa` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `ielts` double NOT NULL,
  `ielts_r` double NOT NULL,
  `ielts_w` double NOT NULL,
  `ielts_l` double NOT NULL,
  `ielts_s` double NOT NULL,
  `toefl` double NOT NULL,
  `toefl_r` double NOT NULL,
  `toefl_w` double NOT NULL,
  `toefl_l` double NOT NULL,
  `toefl_s` double NOT NULL,
  `pte` double NOT NULL,
  `pte_r` double NOT NULL,
  `pte_w` double NOT NULL,
  `pte_l` double NOT NULL,
  `pte_s` double NOT NULL,
  `conditional` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `unconditional` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `cas` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `uk_info_uni`
--

INSERT INTO `uk_info_uni` (`uid`, `uniname`, `location`, `campus`, `nearbycity`, `gpa`, `ielts`, `ielts_r`, `ielts_w`, `ielts_l`, `ielts_s`, `toefl`, `toefl_r`, `toefl_w`, `toefl_l`, `toefl_s`, `pte`, `pte_r`, `pte_w`, `pte_l`, `pte_s`, `conditional`, `unconditional`, `cas`) VALUES
(1, 'Coventry University', 'Coventry City, UK', 'Coventry, London, Dagenham', 'Birmingham International Airport - nearest airport to CU Coventry, 20 minutes away from campus. Alternatively, Fly into Heathrow or Gatwick which are both based in London.', '55%', 6.5, 5.5, 5.5, 5.5, 5.5, 79, 18, 18, 18, 18, 65, 59, 59, 59, 59, '9 Working Days', '9 Working Days', '10 Working Days');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `uk_info_courses`
--
ALTER TABLE `uk_info_courses`
  ADD CONSTRAINT `uk_info_courses_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `uk_info_uni` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
