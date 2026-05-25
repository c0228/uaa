-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 20, 2023 at 12:42 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rkv`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_accounts_roles`
--

DROP TABLE IF EXISTS `user_accounts_roles`;
CREATE TABLE IF NOT EXISTS `user_accounts_roles` (
  `userRole` varchar(15) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`userRole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_accounts_roles`
--

INSERT INTO `user_accounts_roles` (`userRole`) VALUES
('ADMINISTRATOR'),
('CUSTOMER');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 20, 2023 at 12:39 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rkv`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_accounts_info`
--

DROP TABLE IF EXISTS `user_accounts_info`;
CREATE TABLE IF NOT EXISTS `user_accounts_info` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `surName` varchar(35) NOT NULL,
  `name` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(6) NOT NULL,
  `email` varchar(55) NOT NULL,
  `emailVal` varchar(1) NOT NULL,
  `accPwd` varchar(250) NOT NULL,
  `mcountrycode` varchar(6) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `mobileVal` varchar(1) NOT NULL,
  `dp` varchar(500) NOT NULL,
  `userTz` varchar(35) NOT NULL,
  `accactive` varchar(1) NOT NULL,
  `userRole` varchar(15) NOT NULL,
  `createdOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lastUpdatedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`userId`),
  KEY `userRole` (`userRole`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_accounts_info`
--
ALTER TABLE `user_accounts_info`
  ADD CONSTRAINT `user_accounts_info_ibfk_1` FOREIGN KEY (`userRole`) REFERENCES `user_accounts_roles` (`userRole`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 20, 2023 at 12:42 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rkv`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_accounts_perm`
--

DROP TABLE IF EXISTS `user_accounts_perm`;
CREATE TABLE IF NOT EXISTS `user_accounts_perm` (
  `userRole` varchar(15) NOT NULL,
  `route` varchar(50) NOT NULL,
  `component` varchar(255) DEFAULT NULL,
  `c` varchar(1) DEFAULT NULL,
  `r` varchar(1) DEFAULT NULL,
  `u` varchar(1) DEFAULT NULL,
  `d` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`userRole`,`route`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

