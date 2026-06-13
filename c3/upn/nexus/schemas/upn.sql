-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 13, 2026 at 04:14 PM
-- Server version: 9.1.0
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `upn`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_config_settings`
--

DROP TABLE IF EXISTS `app_config_settings`;
CREATE TABLE IF NOT EXISTS `app_config_settings` (
  `config_group` varchar(100) NOT NULL,
  `config_key` varchar(100) NOT NULL,
  `config_value` longtext,
  `description` varchar(500) DEFAULT NULL,
  `is_active` varchar(1) NOT NULL DEFAULT 'Y',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`config_group`,`config_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `app_config_settings`
--

INSERT INTO `app_config_settings` (`config_group`, `config_key`, `config_value`, `description`, `is_active`, `created_at`, `last_updated`) VALUES
('cache', 'lastUpdated', '2026-06-12 18:57:28', 'App\'s Cache Last updated', 'Y', '2026-06-12 13:41:03', '2026-06-12 13:44:11'),
('cache', 'version', '1', 'App\'s Current Cache Version', 'Y', '2026-06-12 13:41:03', '2026-06-12 13:41:03');

-- --------------------------------------------------------

--
-- Table structure for table `dca_categories_list`
--

DROP TABLE IF EXISTS `dca_categories_list`;
CREATE TABLE IF NOT EXISTS `dca_categories_list` (
  `cat_id` varchar(150) NOT NULL,
  `en_cat_name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `hi_cat_name` varchar(150) NOT NULL,
  `en_cat_desc` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `hi_cat_desc` varchar(1000) NOT NULL,
  `is_active` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Y',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cat_id`),
  UNIQUE KEY `cat_name` (`en_cat_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dca_categories_list`
--

INSERT INTO `dca_categories_list` (`cat_id`, `en_cat_name`, `hi_cat_name`, `en_cat_desc`, `hi_cat_desc`, `is_active`, `created_at`, `last_updated`) VALUES
('agriculture', 'Agriculture', 'कृषि', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 07:27:31'),
('art-and-culture', 'Art and Culture', 'कला और संस्कृति', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 16:13:05'),
('awards-persons-and-obituaries', 'Awards, Persons and Obituaries', 'पुरस्कार, व्यक्तित्व और निधन (शोक-संदेश)', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 07:58:28'),
('banking-and-finance', 'Banking and Finance', 'बैंकिंग और वित्त', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 07:58:54'),
('climate-change', 'Climate Change', 'जलवायु परिवर्तन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 07:59:18'),
('constitution', 'Constitution', 'संविधान', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 07:59:44'),
('disaster-management', 'Disaster Management', 'आपदा प्रबंधन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:00:06'),
('economy', 'Economy', 'अर्थव्यवस्था', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:00:26'),
('education', 'Education', 'शिक्षा', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:00:48'),
('environment-and-ecology', 'Environment and Ecology', 'पर्यावरण और पारिस्थितिकी', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:01:09'),
('ethics-and-society', 'Ethics and Society', 'नीतिशास्त्र और समाज', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 07:25:30'),
('geography', 'Geography', 'भूगोल', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:01:33'),
('government-schemes', 'Government Schemes', 'सरकारी योजनाएँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:01:54'),
('health', 'Health', 'स्वास्थ्य', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:03:41'),
('internal-security', 'Internal Security', 'आंतरिक सुरक्षा', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:03:59'),
('international-organizations', 'International Organizations', 'अंतर्राष्ट्रीय संगठन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:04:20'),
('international-relations', 'International Relations', 'अंतर्राष्ट्रीय संबंध', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:04:40'),
('judiciary', 'Judiciary', 'न्यायपालिका', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:04:58'),
('parliament-and-legislation', 'Parliament and Legislation', 'संसद और कानून (विधायन)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:05:25'),
('polity-and-governance', 'Polity and Governance', 'राजनीति और शासन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:05:47'),
('reports-and-indices', 'Reports and Indices', 'रिपोर्ट और सूचकांक', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:06:13'),
('science-and-technology', 'Science and Technology', 'विज्ञान और प्रौद्योगिकी', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:06:34'),
('security-and-defence', 'Security and Defence', 'सुरक्षा और रक्षा', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:06:52'),
('social-justice', 'Social Justice', 'सामाजिक न्याय', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:07:12'),
('space-and-astronomy', 'Space and Astronomy', 'अंतरिक्ष और खगोल विज्ञान', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:07:33');

-- --------------------------------------------------------

--
-- Table structure for table `dca_subcategories_list`
--

DROP TABLE IF EXISTS `dca_subcategories_list`;
CREATE TABLE IF NOT EXISTS `dca_subcategories_list` (
  `subcat_id` varchar(150) NOT NULL,
  `cat_id` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `en_subcat_name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `hi_subcat_name` varchar(150) NOT NULL,
  `en_subcat_desc` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `hi_subcat_desc` varchar(1000) NOT NULL,
  `is_active` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Y',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`subcat_id`,`cat_id`),
  UNIQUE KEY `subcat_name` (`en_subcat_name`),
  KEY `cat_id` (`cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dca_subcategories_list`
--

INSERT INTO `dca_subcategories_list` (`subcat_id`, `cat_id`, `en_subcat_name`, `hi_subcat_name`, `en_subcat_desc`, `hi_subcat_desc`, `is_active`, `created_at`, `last_updated`) VALUES
('access-to-justice', 'judiciary', 'Access to Justice', 'न्याय तक पहुँच', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:08:42'),
('accountability', 'ethics-and-society', 'Accountability', 'जवाबदेही', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:09:00'),
('act-east-policy', 'international-relations', 'Act East Policy', 'एक्ट ईस्ट पॉलिसी (पूर्व की ओर देखो नीति)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:09:18'),
('acts', 'parliament-and-legislation', 'Acts', 'अधिनियम', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:09:40'),
('adaptation', 'climate-change', 'Adaptation', 'अनुकूलन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:10:05'),
('agri-tech', 'agriculture', 'Agri-Tech', 'कृषि-तकनीक (एग्री-टेक)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:10:25'),
('agricultural-exports', 'agriculture', 'Agricultural Exports', 'कृषि निर्यात', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:10:46'),
('agricultural-geography', 'geography', 'Agricultural Geography', 'कृषि भूगोल', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:11:06'),
('agricultural-reforms', 'agriculture', 'Agricultural Reforms', 'कृषि सुधार', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:11:23'),
('ancient-india', 'art-and-culture', 'Ancient India', 'प्राचीन भारत', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:11:42'),
('appointments', 'awards-persons-and-obituaries', 'Appointments', 'नियुक्तियाँ', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 08:12:03'),
('aptitude', 'ethics-and-society', 'Aptitude', 'अभिक्षमता', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:12:23'),
('architecture', 'art-and-culture', 'Architecture', 'वास्तुकला', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:12:38'),
('armed-forces', 'security-and-defence', 'Armed Forces', 'सशस्त्र बल', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:12:56'),
('artificial-intelligence', 'science-and-technology', 'Artificial Intelligence', 'कृत्रिम बुद्धिमत्ता ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:13:33'),
('artists-and-authors', 'awards-persons-and-obituaries', 'Artists & Authors', 'कलाकार और लेखक', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 08:14:06'),
('asean', 'international-organizations', 'ASEAN', 'आसियान (दक्षिण-पूर्वी एशियाई राष्ट्रों का संघ)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:14:25'),
('astronomy-discoveries', 'space-and-astronomy', 'Astronomy Discoveries', 'खगोलीय खोजें', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:14:49'),
('bilateral-relations', 'international-relations', 'Bilateral Relations', 'द्विपक्षीय संबंध', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:15:07'),
('bills', 'parliament-and-legislation', 'Bills', 'विधेयक', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:15:24'),
('biodiversity', 'environment-and-ecology', 'Biodiversity', 'जैव विविधता', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:15:48'),
('biotechnology', 'science-and-technology', 'Biotechnology', 'जैव प्रौद्योगिकी (बायोटेक्नोलॉजी)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:16:27'),
('border-management', 'internal-security', 'Border Management', 'सीमा प्रबंधन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:16:44'),
('border-security', 'security-and-defence', 'Border Security', 'सीमा सुरक्षा', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:17:01'),
('brics', 'international-organizations', 'BRICS', 'ब्रिक्स (ब्राजील, रूस, भारत, चीन और दक्षिण अफ्रीका का समूह)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:17:22'),
('budget', 'economy', 'Budget', 'बजट (वार्षिक वित्तीय विवरण)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:17:42'),
('capital-markets', 'banking-and-finance', 'Capital Markets', 'पूंजी बाज़ार', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:18:14'),
('carbon-emissions', 'climate-change', 'Carbon Emissions', 'कार्बन उत्सर्जन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:18:46'),
('case-studies', 'ethics-and-society', 'Case Studies', 'केस स्टडी (विस्तृत अध्ययन)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:27:37'),
('central-sector-schemes', 'government-schemes', 'Central Sector Schemes', 'केंद्रीय क्षेत्र की योजनाएँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:27:57'),
('centrally-sponsored-schemes', 'government-schemes', 'Centrally Sponsored Schemes', 'केंद्र प्रायोजित योजनाएँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:28:26'),
('centre-state-relations', 'constitution', 'Centre-State Relations', 'केंद्र-राज्य संबंध', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:30:01'),
('children', 'social-justice', 'Children', 'बच्चे', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:30:20'),
('citizen-charters', 'polity-and-governance', 'Citizen Charters', 'नागरिक घोषणापत्र', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:31:35'),
('citizens-skill-development', 'government-schemes', 'Citizens Skill Development', 'नागरिकों का कौशल विकास', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:31:56'),
('civil-service-values', 'ethics-and-society', 'Civil Service Values', 'सिविल सेवा मूल्य', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:32:13'),
('civil-services', 'polity-and-governance', 'Civil Services', 'सिविल सेवाएँ (नागरिक सेवाएँ)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:32:39'),
('civilian-awards', 'awards-persons-and-obituaries', 'Civilian Awards', 'नागरिक पुरस्कार (जैसे भारत रत्न, पद्म पुरस्कार)', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 08:33:01'),
('climate-finance', 'climate-change', 'Climate Finance', 'जलवायु वित्त', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:33:19'),
('climate-reports', 'climate-change', 'Climate Reports', 'जलवायु रिपोर्ट', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:33:37'),
('climatology', 'geography', 'Climatology', 'जलवायु विज्ञान', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:33:58'),
('commercial-banks', 'banking-and-finance', 'Commercial Banks', 'वाणिज्यिक बैंक', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:34:28'),
('commercial-space-sector', 'space-and-astronomy', 'Commercial Space Sector', 'वाणिज्यिक अंतरिक्ष क्षेत्र', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:34:56'),
('committees', 'parliament-and-legislation', 'Committees', 'समितियाँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:35:14'),
('communal-harmony', 'ethics-and-society', 'Communal Harmony', 'सांप्रदायिक सद्भाव', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:35:46'),
('conservation-initiatives', 'environment-and-ecology', 'Conservation Initiatives', 'संरक्षण पहल', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:36:03'),
('constitutional-amendments', 'constitution', 'Constitutional Amendments', 'संवैधानिक संशोधन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:36:23'),
('constitutional-bodies', 'constitution', 'Constitutional Bodies', 'संवैधानिक निकाय', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:36:38'),
('constitutional-developments', 'constitution', 'Constitutional Developments', 'संवैधानिक विकास', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:36:56'),
('constitutional-interpretation', 'judiciary', 'Constitutional Interpretation', 'संवैधानिक व्याख्या', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:37:15'),
('cop-meetings', 'climate-change', 'COP Meetings', 'सीओपी (COP) बैठकें', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:37:42'),
('crop-production', 'agriculture', 'Crop Production', 'फसल उत्पादन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:37:57'),
('cultural-institutions', 'art-and-culture', 'Cultural Institutions', 'सांस्कृतिक संस्थान', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:38:12'),
('cyber-crime', 'internal-security', 'Cyber Crime', 'साइबर अपराध', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:38:34'),
('cyber-security', 'security-and-defence', 'Cyber Security', 'साइबर सुरक्षा', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:38:53'),
('cyclones', 'disaster-management', 'Cyclones', 'चक्रवात', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:39:08'),
('dance-forms', 'art-and-culture', 'Dance Forms', 'नृत्य शैलियाँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:39:28'),
('defence-agreements', 'security-and-defence', 'Defence Agreements', 'रक्षा समझौते', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:45:51'),
('defence-exercises', 'security-and-defence', 'Defence Exercises', 'रक्षा अभ्यास (युद्धाभ्यास)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:46:09'),
('defence-procurement', 'security-and-defence', 'Defence Procurement', 'रक्षा खरीद', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:46:25'),
('diaspora-affairs', 'international-relations', 'Diaspora Affairs', 'प्रवासी मामले', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:46:50'),
('digital-education', 'education', 'Digital Education', 'डिजिटल शिक्षा', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:47:12'),
('digital-india', 'government-schemes', 'Digital India', 'डिजिटल इंडिया', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:47:43'),
('digital-payments', 'banking-and-finance', 'Digital Payments', 'डिजिटल भुगतान', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:47:58'),
('digital-technology', 'science-and-technology', 'Digital Technology', 'डिजिटल प्रौद्योगिकी', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:48:14'),
('diplomatic-visits', 'international-relations', 'Diplomatic Visits', 'राजनयिक यात्राएँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:48:29'),
('directive-principles', 'constitution', 'Directive Principles', 'राज्य के नीति निदेशक तत्व', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:48:49'),
('disaster-preparedness', 'disaster-management', 'Disaster Preparedness', 'आपदा की तैयारी', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:49:04'),
('disaster-response', 'disaster-management', 'Disaster Response', 'आपदा अनुक्रिया (आपदा के समय बचाव कार्य)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:49:21'),
('disease-outbreaks', 'health', 'Disease Outbreaks', 'रोग प्रकोप (महामारी का प्रसार)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:52:02'),
('drug-trafficking', 'internal-security', 'Drug Trafficking', 'मादक पदार्थों की तस्करी', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:52:23'),
('e-governance', 'polity-and-governance', 'E-Governance', 'ई-शासन (इलेक्ट्रॉनिक शासन)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:52:41'),
('early-warning-systems', 'disaster-management', 'Early Warning Systems', 'प्रारंभिक चेतावनी प्रणालियाँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:53:03'),
('earthquakes', 'disaster-management', 'Earthquakes', 'भूकंप', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:53:30'),
('ecological-restoration', 'environment-and-ecology', 'Ecological Restoration', 'पारिस्थितिक बहाली', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:53:53'),
('economic-reforms', 'economy', 'Economic Reforms', 'आर्थिक सुधार', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:54:43'),
('economic-reports', 'reports-and-indices', 'Economic Reports', 'आर्थिक रिपोर्ट', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:55:17'),
('economic-survey', 'economy', 'Economic Survey', 'आर्थिक सर्वेक्षण', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:55:39'),
('education-reports', 'reports-and-indices', 'Education Reports', 'शिक्षा रिपोर्ट', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:56:01'),
('educational-reforms', 'education', 'Educational Reforms', 'शैक्षिक सुधार', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:56:19'),
('election-laws', 'parliament-and-legislation', 'Election Laws', 'चुनाव कानून', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:56:36'),
('electoral-reforms', 'polity-and-governance', 'Electoral Reforms', 'चुनावी सुधार', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:56:57'),
('emergency-provisions', 'constitution', 'Emergency Provisions', 'आपातकालीन प्रावधान', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:57:18'),
('emerging-technologies', 'science-and-technology', 'Emerging Technologies', 'उभरती प्रौद्योगिकियाँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:57:40'),
('emotional-intelligence', 'ethics-and-society', 'Emotional Intelligence', 'भावनात्मक बुद्धिमत्ता (संवेगात्मक बुद्धि)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:58:00'),
('employment', 'economy', 'Employment', 'रोजगार', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:59:17'),
('environmental-governance', 'environment-and-ecology', 'Environmental Governance', 'पर्यावरण शासन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 08:59:34'),
('environmental-reports', 'reports-and-indices', 'Environmental Reports', 'पर्यावरणीय रिपोर्ट', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:01:46'),
('ethical-issues', 'ethics-and-society', 'Ethical Issues', 'नैतिक मुद्दे', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:02:04'),
('examinations', 'education', 'Examinations', 'परीक्षाएँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:02:22'),
('fairs', 'art-and-culture', 'Fairs', 'मेले', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:03:00'),
('federalism', 'polity-and-governance', 'Federalism', 'संघवाद', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:03:18'),
('festivals', 'art-and-culture', 'Festivals', 'त्योहार', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:03:37'),
('financial-inclusion', 'banking-and-finance', 'Financial Inclusion', 'वित्तीय समावेशन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:03:58'),
('financial-markets', 'banking-and-finance', 'Financial Markets', 'वित्तीय बाज़ार', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:04:18'),
('fintech', 'banking-and-finance', 'FinTech', 'फिनटेक (वित्तीय प्रौद्योगिकी)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:04:35'),
('fiscal-policy', 'economy', 'Fiscal Policy', 'राजकोषीय नीति', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:04:51'),
('fisheries', 'agriculture', 'Fisheries', 'मत्स्य पालन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:05:08'),
('flagship-programmes', 'government-schemes', 'Flagship Programmes', 'प्रमुख कार्यक्रम (फ्लैगशिप कार्यक्रम)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:05:26'),
('floods', 'disaster-management', 'Floods', 'बाढ़', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:05:48'),
('food-processing', 'agriculture', 'Food Processing', 'खाद्य प्रसंस्करण', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:06:03'),
('forests', 'environment-and-ecology', 'Forests', 'वन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:06:20'),
('fundamental-duties', 'constitution', 'Fundamental Duties', 'मौलिक कर्तव्य', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:06:36'),
('fundamental-rights', 'constitution', 'Fundamental Rights', 'मौलिक अधिकार', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:06:54'),
('g20', 'international-organizations', 'G20', 'जी20 (20 अर्थव्यवस्थाओं का समूह)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:07:16'),
('gdp', 'economy', 'GDP', 'सकल घरेलू उत्पाद (जीडीपी)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:07:34'),
('gender-issues', 'ethics-and-society', 'Gender Issues', 'लैंगिक मुद्दे', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:08:21'),
('geographical-phenomena', 'geography', 'Geographical Phenomena', 'भौगोलिक घटनाएँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:08:55'),
('geomorphology', 'geography', 'Geomorphology', 'भू-आकृति विज्ञान', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:09:14'),
('gi-tags', 'art-and-culture', 'GI Tags', 'भौगोलिक संकेतक टैग', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:10:03'),
('global-climate-initiatives', 'climate-change', 'Global Climate Initiatives', 'वैश्विक जलवायु पहल', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:10:26'),
('global-indices', 'reports-and-indices', 'Global Indices', 'वैश्विक सूचकांक', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:11:00'),
('global-leaders', 'awards-persons-and-obituaries', 'Global Leaders', 'वैश्विक नेता', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 09:11:24'),
('global-summits', 'international-relations', 'Global Summits', 'वैश्विक शिखर सम्मेलन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:11:42'),
('governance', 'polity-and-governance', 'Governance', 'शासन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:12:24'),
('government-reports', 'reports-and-indices', 'Government Reports', 'सरकारी रिपोर्ट', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:12:45'),
('health-infrastructure', 'health', 'Health Infrastructure', 'स्वास्थ्य अवसंरचना (स्वास्थ्य ढाँचा)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:13:05'),
('health-reports', 'reports-and-indices', 'Health Reports', 'स्वास्थ्य रिपोर्ट', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:13:27'),
('healthcare-schemes', 'health', 'Healthcare Schemes', 'स्वास्थ्य सेवा योजनाएँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:13:51'),
('heat-waves', 'disaster-management', 'Heat Waves', 'लू (ग्रीष्म लहर)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:14:17'),
('high-courts', 'judiciary', 'High Courts', 'उच्च न्यायालय', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:14:36'),
('higher-education', 'education', 'Higher Education', 'उच्च शिक्षा', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:14:54'),
('housing-schemes', 'government-schemes', 'Housing Schemes', 'आवास योजनाएँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:15:14'),
('human-values', 'ethics-and-society', 'Human Values', 'मानवीय मूल्य', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:15:34'),
('imf', 'international-organizations', 'IMF', 'अंतर्राष्ट्रीय मुद्रा कोष (आईएमएफ)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:16:04'),
('imf-reports', 'reports-and-indices', 'IMF Reports', 'आईएमएफ (अंतर्राष्ट्रीय मुद्रा कोष) की रिपोर्ट', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:16:28'),
('important-debates', 'parliament-and-legislation', 'Important Debates', 'महत्वपूर्ण बहस', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:16:45'),
('important-judgments', 'judiciary', 'Important Judgments', 'महत्वपूर्ण निर्णय (फैसले)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:17:03'),
('important-personalities', 'awards-persons-and-obituaries', 'Important Personalities', 'महत्वपूर्ण व्यक्तित्व', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 09:17:22'),
('india-rankings', 'reports-and-indices', 'India Rankings', 'भारत की रैंकिंग (श्रेणीकरण)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:17:42'),
('indian-geography', 'geography', 'Indian Geography', 'भारतीय भूगोल', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:48:06'),
('indo-pacific', 'international-relations', 'Indo-Pacific', 'हिंद-प्रशांत (इंडो-पैसिफिक)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:48:25'),
('inflation', 'economy', 'Inflation', 'मुद्रास्फीति (महंगाई)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:48:43'),
('insurance', 'banking-and-finance', 'Insurance', 'बीमा', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:50:32'),
('insurgency', 'internal-security', 'Insurgency', 'उग्रवाद (विद्रोह)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:50:52'),
('integrity', 'ethics-and-society', 'Integrity', 'सत्यनिष्ठा', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:51:10'),
('intelligence-agencies', 'internal-security', 'Intelligence Agencies', 'खुफिया एजेंसियाँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:51:28'),
('international-awards', 'awards-persons-and-obituaries', 'International Awards', 'अंतर्राष्ट्रीय पुरस्कार', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 09:51:46'),
('international-reports', 'reports-and-indices', 'International Reports', 'अंतर्राष्ट्रीय रिपोर्ट', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:52:05'),
('international-space-missions', 'space-and-astronomy', 'International Space Missions', 'अंतर्राष्ट्रीय अंतरिक्ष मिशन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:52:23'),
('irrigation', 'agriculture', 'Irrigation', 'सिंचाई', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:52:49'),
('isro-missions', 'space-and-astronomy', 'ISRO Missions', 'इसरो (ISRO) मिशन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:53:10'),
('judicial-appointments', 'judiciary', 'Judicial Appointments', 'न्यायिक नियुक्तियाँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:53:27'),
('judicial-reforms', 'judiciary', 'Judicial Reforms', 'न्यायिक सुधार', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:53:46'),
('launch-vehicles', 'space-and-astronomy', 'Launch Vehicles', 'प्रक्षेपण यान', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:54:18'),
('left-wing-extremism', 'internal-security', 'Left Wing Extremism', 'वामपंथी उग्रवाद (नक्सलवाद)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:54:36'),
('legal-developments', 'judiciary', 'Legal Developments', 'कानूनी घटनाक्रम', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:55:19'),
('legislative-reforms', 'parliament-and-legislation', 'Legislative Reforms', 'विधायी सुधार', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:55:40'),
('literacy', 'education', 'Literacy', 'साक्षरता', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:56:00'),
('literary-awards', 'awards-persons-and-obituaries', 'Literary Awards', 'साहित्यिक पुरस्कार', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 09:56:18'),
('literature', 'art-and-culture', 'Literature', 'साहित्य', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:56:35'),
('livestock', 'agriculture', 'Livestock', 'पशुधन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:56:53'),
('local-governance', 'polity-and-governance', 'Local Governance', 'स्थानीय शासन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:57:12'),
('mapping-and-places-in-news', 'geography', 'Mapping and Places in News', 'मानचित्रण और चर्चा में रहे स्थान', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:57:35'),
('maritime-security', 'security-and-defence', 'Maritime Security', 'समुद्री सुरक्षा', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:57:54'),
('medical-research', 'health', 'Medical Research', 'चिकित्सा अनुसंधान', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:58:13'),
('medieval-india', 'art-and-culture', 'Medieval India', 'मध्यकालीन भारत', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:58:32'),
('mental-health', 'health', 'Mental Health', 'मानसिक स्वास्थ्य', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:59:13'),
('military-technology', 'security-and-defence', 'Military Technology', 'सैन्य प्रौद्योगिकी', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:58:56'),
('minerals', 'geography', 'Minerals', 'खनिज', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:59:30'),
('minorities', 'social-justice', 'Minorities', 'अल्पसंख्यक', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 09:59:48'),
('mitigation', 'climate-change', 'Mitigation', 'शमन (प्रभाव कम करना)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:00:07'),
('modern-indian-culture', 'art-and-culture', 'Modern Indian Culture', 'आधुनिक भारतीय संस्कृति', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:00:24'),
('monetary-policy', 'economy', 'Monetary Policy', 'मौद्रिक नीति', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:00:44'),
('money-laundering', 'internal-security', 'Money Laundering', 'धन शोधन (मनी लॉन्ड्रिंग)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:01:05'),
('mountains', 'geography', 'Mountains', 'पर्वत', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:01:21'),
('msp', 'agriculture', 'MSP', 'न्यूनतम समर्थन मूल्य (एमएसपी)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:01:44'),
('multilateral-relations', 'international-relations', 'Multilateral Relations', 'बहुपक्षीय संबंध', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:02:07'),
('music', 'art-and-culture', 'Music', 'संगीत', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:02:24'),
('nanotechnology', 'science-and-technology', 'Nanotechnology', 'नैनो प्रौद्योगिकी', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:02:46'),
('national-awards', 'awards-persons-and-obituaries', 'National Awards', 'राष्ट्रीय पुरस्कार', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 10:03:04'),
('national-education-policy', 'education', 'National Education Policy', 'राष्ट्रीय शिक्षा नीति', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:03:21'),
('national-security', 'security-and-defence', 'National Security', 'राष्ट्रीय सुरक्षा', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:03:38'),
('natural-disasters', 'disaster-management', 'Natural Disasters', 'प्राकृतिक आपदाएँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:09:37'),
('natural-resources', 'geography', 'Natural Resources', 'प्राकृतिक संसाधन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:09:56'),
('nbfcs', 'banking-and-finance', 'NBFCs', 'गैर-बैंकिंग वित्तीय कंपनियाँ (एनबीएफसी)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:10:17'),
('ndma', 'disaster-management', 'NDMA', 'राष्ट्रीय आपदा प्रबंधन प्राधिकरण (एनडीएमए)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:10:35'),
('neighbourhood-policy', 'international-relations', 'Neighbourhood Policy', 'पड़ोस प्रथम नीति (नेबरहुड पॉलिसी)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:10:57'),
('net-zero', 'climate-change', 'Net Zero', 'नेट ज़ीरो (शुद्ध-शून्य उत्सर्जन)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:11:20'),
('niti-aayog-reports', 'reports-and-indices', 'NITI Aayog Reports', 'नीति आयोग की रिपोर्ट', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:11:38'),
('non-constitutional-bodies', 'constitution', 'Non-Constitutional Bodies', 'गैर-संवैधानिक निकाय', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:23:37'),
('nutrition', 'health', 'Nutrition', 'पोषण', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:23:52'),
('obc', 'social-justice', 'OBC', 'अन्य पिछड़ा वर्ग (ओबीसी)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:24:11'),
('obituaries', 'awards-persons-and-obituaries', 'Obituaries', 'निधन (शोक-संदेश)', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 10:24:52'),
('oceanography', 'geography', 'Oceanography', 'समुद्र विज्ञान', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:25:10'),
('ordinances', 'parliament-and-legislation', 'Ordinances', 'अध्यादेश', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:25:25'),
('organic-farming', 'agriculture', 'Organic Farming', 'जैविक खेती', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:25:41'),
('organized-crime', 'internal-security', 'Organized Crime', 'संगठित अपराध', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:26:08'),
('paintings', 'art-and-culture', 'Paintings', 'चित्रकला', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:26:27'),
('parliament-sessions', 'parliament-and-legislation', 'Parliament Sessions', 'संसद सत्र', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:26:45'),
('parliamentary-procedures', 'parliament-and-legislation', 'Parliamentary Procedures', 'संसदीय प्रक्रियाएँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:27:03'),
('persons-with-disabilities', 'social-justice', 'Persons with Disabilities', 'दिव्यांगजन (विकलांग व्यक्ति)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:27:25'),
('physical-geography', 'geography', 'Physical Geography', 'भौतिक भूगोल', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:27:46'),
('planetary-science', 'space-and-astronomy', 'Planetary Science', 'ग्रहीय विज्ञान', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:28:03'),
('political-leaders', 'awards-persons-and-obituaries', 'Political Leaders', 'राजनीतिक नेता', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 10:28:41'),
('pollution', 'environment-and-ecology', 'Pollution', 'प्रदूषण', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:29:00'),
('population-geography', 'geography', 'Population Geography', 'जनसंख्या भूगोल', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:29:27'),
('poverty-and-inequality', 'social-justice', 'Poverty and Inequality', 'गरीबी और असमानता', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:29:45'),
('private-member-bills', 'parliament-and-legislation', 'Private Member Bills', 'निजी सदस्य विधेयक', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:30:08'),
('probity-in-governance', 'ethics-and-society', 'Probity in Governance', 'शासन में ईमानदारी (शुचिता)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:30:27'),
('protected-areas', 'environment-and-ecology', 'Protected Areas', 'संरक्षित क्षेत्र', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:30:44'),
('public-administration', 'polity-and-governance', 'Public Administration', 'लोक प्रशासन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:31:03'),
('public-health', 'health', 'Public Health', 'सार्वजनिक स्वास्थ्य', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:31:27'),
('public-interest-litigation', 'judiciary', 'Public Interest Litigation', 'जनहित याचिका', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:31:46'),
('public-policy', 'polity-and-governance', 'Public Policy', 'सार्वजनिक नीति', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:32:08'),
('quantum-computing', 'science-and-technology', 'Quantum Computing', 'क्वांटम कंप्यूटिंग', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:32:25'),
('rbi', 'banking-and-finance', 'RBI', 'भारतीय रिज़र्व बैंक (आरबीआई)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:32:49'),
('regional-organizations', 'international-organizations', 'Regional Organizations', 'क्षेत्रीय संगठन', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:33:06'),
('renewable-energy', 'climate-change', 'Renewable Energy', 'नवीकरणीय ऊर्जा (अक्षय ऊर्जा)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:35:48'),
('research-and-innovation', 'science-and-technology', 'Research and Innovation', 'अनुसंधान और नवाचार', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:36:09'),
('research-institutions', 'education', 'Research Institutions', 'अनुसंधान संस्थान', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:36:27'),
('resignations', 'awards-persons-and-obituaries', 'Resignations', 'इस्तीफे', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 10:36:45'),
('resilience-building', 'disaster-management', 'Resilience Building', 'लचीलापन निर्माण (आपदा सहन करने की क्षमता विकसित करना)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:37:08'),
('rivers', 'geography', 'Rivers', 'नदियाँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:37:26'),
('robotics', 'science-and-technology', 'Robotics', 'रोबोटिक्स', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:37:42'),
('role-models', 'ethics-and-society', 'Role Models', 'आदर्श (रोल मॉडल)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:38:02'),
('rural-development', 'government-schemes', 'Rural Development', 'ग्रामीण विकास', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:38:19'),
('satellites', 'space-and-astronomy', 'Satellites', 'उपग्रह', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:38:43'),
('sc-and-st', 'social-justice', 'SC & ST', 'अनुसूचित जाति और अनुसूचित जनजाति', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:39:13'),
('schedules', 'constitution', 'Schedules', 'अनुसूचियाँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:39:31'),
('school-education', 'education', 'School Education', 'स्कूली शिक्षा', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:39:49'),
('science-awards', 'awards-persons-and-obituaries', 'Science Awards', 'विज्ञान पुरस्कार', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 10:40:47'),
('scientific-discoveries', 'science-and-technology', 'Scientific Discoveries', 'वैज्ञानिक खोजें', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:40:23'),
('scientists', 'awards-persons-and-obituaries', 'Scientists', 'वैज्ञानिक', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 10:41:08'),
('sco', 'international-organizations', 'SCO', 'शंघाई सहयोग संगठन (एससीओ)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:41:33'),
('sculpture', 'art-and-culture', 'Sculpture', 'मूर्तिकला', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:41:51'),
('security-challenges', 'internal-security', 'Security Challenges', 'सुरक्षा चुनौतियाँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:42:29'),
('semiconductors', 'science-and-technology', 'Semiconductors', 'अर्धचालक (सेमीकंडक्टर्स)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:42:46'),
('senior-citizens', 'social-justice', 'Senior Citizens', 'वरिष्ठ नागरिक', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:43:02'),
('skill-development', 'education', 'Skill Development', 'नागरिकों का कौशल विकास', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:43:23'),
('social-capital', 'ethics-and-society', 'Social Capital', 'सामाजिक पूंजी', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:43:44'),
('social-issues', 'ethics-and-society', 'Social Issues', 'सामाजिक मुद्दे', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:44:00'),
('social-welfare', 'social-justice', 'Social Welfare', 'सामाजिक कल्याण', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:44:16'),
('space-exploration', 'space-and-astronomy', 'Space Exploration', 'अंतरिक्ष अन्वेषण', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:44:32'),
('space-policy', 'space-and-astronomy', 'Space Policy', 'अंतरिक्ष नीति', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:44:47'),
('space-technology', 'space-and-astronomy', 'Space Technology', 'अंतरिक्ष प्रौद्योगिकी', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:45:03'),
('species-in-news', 'environment-and-ecology', 'Species in News', 'चर्चा में रहने वाली प्रजातियाँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:45:26'),
('sports-awards', 'awards-persons-and-obituaries', 'Sports Awards', 'खेल पुरस्कार', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 10:45:45'),
('sports-personalities', 'awards-persons-and-obituaries', 'Sports Personalities', 'खेल हस्तियाँ (खिलाड़ी)', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 10:46:05'),
('statistical-publications', 'reports-and-indices', 'Statistical Publications', 'सांख्यिकीय प्रकाशन', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 10:46:21'),
('strategic-affairs', 'security-and-defence', 'Strategic Affairs', 'रणनीतिक मामले', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:46:40'),
('strategic-partnerships', 'international-relations', 'Strategic Partnerships', 'रणनीतिक साझेदारी', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:47:02'),
('supreme-court', 'judiciary', 'Supreme Court', 'सर्वोच्च न्यायालय', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:47:53'),
('survey-findings', 'reports-and-indices', 'Survey Findings', 'सर्वेक्षण के निष्कर्ष', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 10:48:10'),
('taxation', 'economy', 'Taxation', 'कराधान (कर प्रणाली)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:48:34'),
('terrorism', 'internal-security', 'Terrorism', 'आतंकवाद', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:48:49'),
('theatre', 'art-and-culture', 'Theatre', 'रंगमंच', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:49:07'),
('think-tank-reports', 'reports-and-indices', 'Think Tank Reports', 'थिंक टैंक (विचार मंच) की रिपोर्ट', '', '', 'Y', '2026-06-12 13:27:29', '2026-06-13 10:49:23'),
('trade', 'economy', 'Trade', 'व्यापार', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:49:41'),
('transparency', 'ethics-and-society', 'Transparency', 'पारदर्शिता', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:49:56'),
('transparency-and-accountability', 'polity-and-governance', 'Transparency and Accountability', 'पारदर्शिता और जवाबदेही', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:50:15'),
('treaties-and-agreements', 'international-relations', 'Treaties and Agreements', 'संधियाँ और समझौते', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:54:18'),
('tribunals', 'judiciary', 'Tribunals', 'अधिकरण (ट्रिब्यूनल)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:54:36'),
('un-reports', 'reports-and-indices', 'UN Reports', 'संयुक्त राष्ट्र की रिपोर्ट', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:55:08'),
('unesco-heritage', 'art-and-culture', 'UNESCO Heritage', 'यूनेस्को धरोहर (विश्व धरोहर)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:55:39'),
('unfccc', 'climate-change', 'UNFCCC', 'संयुक्त राष्ट्र जलवायु परिवर्तन फ्रेमवर्क कन्वेंशन (यूएनएफसीसीसी)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:56:08'),
('united-nations', 'international-organizations', 'United Nations', 'संयुक्त राष्ट्र (यूएन)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:56:52'),
('upi', 'banking-and-finance', 'UPI', 'एकीकृत भुगतान इंटरफेस (यूपीआई)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:58:30'),
('urban-development', 'government-schemes', 'Urban Development', 'शहरी विकास', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 10:58:56'),
('urbanization', 'geography', 'Urbanization', 'शहरीकरण', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 11:00:04'),
('vaccination', 'health', 'Vaccination', 'टीकाकरण', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 11:01:01'),
('welfare-schemes', 'government-schemes', 'Welfare Schemes', 'कल्याणकारी योजनाएँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 11:01:27'),
('who', 'international-organizations', 'WHO', 'विश्व स्वास्थ्य संगठन (डब्ल्यूएचओ)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 11:01:35'),
('who-initiatives', 'health', 'WHO Initiatives', 'विश्व स्वास्थ्य संगठन (डब्ल्यूएचओ) की पहल', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 11:02:03'),
('wildlife-conservation', 'environment-and-ecology', 'Wildlife Conservation', 'वन्यजीव संरक्षण', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 11:02:29'),
('women', 'social-justice', 'Women', 'महिलाएँ', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 11:02:52'),
('world-bank', 'international-organizations', 'World Bank', 'विश्व बैंक', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 11:03:29'),
('world-bank-reports', 'reports-and-indices', 'World Bank Reports', 'विश्व बैंक की रिपोर्ट', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 11:04:00'),
('world-geography', 'geography', 'World Geography', 'विश्व भूगोल', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 11:04:42'),
('wto', 'international-organizations', 'WTO', 'विश्व व्यापार संगठन (डब्ल्यूटीओ)', '', '', 'Y', '2026-06-12 13:27:28', '2026-06-13 11:04:50');

-- --------------------------------------------------------

--
-- Table structure for table `upn_exam_groups`
--

DROP TABLE IF EXISTS `upn_exam_groups`;
CREATE TABLE IF NOT EXISTS `upn_exam_groups` (
  `group_code` varchar(50) NOT NULL,
  `group_name` varchar(200) NOT NULL,
  UNIQUE KEY `group_code` (`group_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `upn_exam_groups`
--

INSERT INTO `upn_exam_groups` (`group_code`, `group_name`) VALUES
('CIVIL_ADMIN', 'Civil and Administrative Services'),
('DEFENCE', 'Defence and Security Services'),
('ENGINEERING', 'Engineering, Science and Medical Services'),
('SPECIALIZED', 'Specialized Recruitment Tests');

-- --------------------------------------------------------

--
-- Table structure for table `upn_exam_list`
--

DROP TABLE IF EXISTS `upn_exam_list`;
CREATE TABLE IF NOT EXISTS `upn_exam_list` (
  `exam_code` varchar(50) NOT NULL,
  `exam_name` varchar(255) NOT NULL,
  `group_code` varchar(50) NOT NULL,
  PRIMARY KEY (`exam_code`),
  KEY `group_code` (`group_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `upn_exam_list`
--

INSERT INTO `upn_exam_list` (`exam_code`, `exam_name`, `group_code`) VALUES
('CAPF', 'CAPF Assistant Commandants', 'DEFENCE'),
('CDS', 'Combined Defence Services', 'DEFENCE'),
('CGSE', 'Combined Geo-Scientist', 'ENGINEERING'),
('CMS', 'Combined Medical Services', 'ENGINEERING'),
('CSE', 'Civil Services Examination', 'CIVIL_ADMIN'),
('ESE', 'Engineering Services Examination', 'ENGINEERING'),
('IES/ISS', 'Indian Economic Service / Indian Statistical Service', 'CIVIL_ADMIN'),
('IFoS', 'Indian Forest Service', 'CIVIL_ADMIN'),
('NDA', 'National Defence Academy & Naval Academy', 'DEFENCE'),
('RT', 'Recruitment Tests', 'SPECIALIZED'),
('SCRA', 'Special Class Railway Apprentices', 'SPECIALIZED');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dca_subcategories_list`
--
ALTER TABLE `dca_subcategories_list`
  ADD CONSTRAINT `dca_subcategories_list_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `dca_categories_list` (`cat_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `upn_exam_list`
--
ALTER TABLE `upn_exam_list`
  ADD CONSTRAINT `upn_exam_list_ibfk_1` FOREIGN KEY (`group_code`) REFERENCES `upn_exam_groups` (`group_code`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
