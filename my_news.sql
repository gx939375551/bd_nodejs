-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-01-06 17:03:34
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_news`
--

-- --------------------------------------------------------

--
-- 表的结构 `News`
--

CREATE TABLE IF NOT EXISTS `News` (
  `newsID` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `newstype` char(50) NOT NULL,
  `content` text NOT NULL,
  `newsDate` date NOT NULL,
  `img` char(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `News`
--

INSERT INTO `News` (`newsID`, `title`, `newstype`, `content`, `newsDate`, `img`) VALUES
(38, '哈哈', '推荐', '哈哈', '2016-01-06', 'http://localhost:3000/img/1.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `News`
--
ALTER TABLE `News`
  ADD PRIMARY KEY (`newsID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `News`
--
ALTER TABLE `News`
  MODIFY `newsID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=43;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
