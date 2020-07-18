-- DataSet [landfill]


-- Classification [class]
CREATE TABLE `class` (
	`value` VARCHAR(1),
	`label` VARCHAR(256),
	CONSTRAINT class_pk PRIMARY KEY (`value`)
);
INSERT INTO `class` VALUES('0', 'Waste');
INSERT INTO `class` VALUES('1', 'C&D, Diverted');
-- Classification [source]
CREATE TABLE `source` (
	`value` VARCHAR(1),
	`label` VARCHAR(256),
	CONSTRAINT source_pk PRIMARY KEY (`value`)
);
INSERT INTO `source` VALUES('0', 'Transfer Station');
INSERT INTO `source` VALUES('1', 'Household Trash');
INSERT INTO `source` VALUES('2', 'Misc Trash');
INSERT INTO `source` VALUES('3', 'Construction');
INSERT INTO `source` VALUES('4', 'Codes');
-- Record Layout [landfill]
CREATE TABLE `landfill` (
	`date` DATE,
	`class` VARCHAR(1),
	`source` VARCHAR(1),
	`landfill_wt` INT,
	FOREIGN KEY (`class`) REFERENCES `class` (`value`),
	FOREIGN KEY (`source`) REFERENCES `source` (`value`)
);


