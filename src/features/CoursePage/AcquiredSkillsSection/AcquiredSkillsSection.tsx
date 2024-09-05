import React from "react";
import styles from "./AcquiredSkillsSection.module.css";
import Chip from "@/components/ui/Chip/Chip";

interface AcquiredSkillsSectionProps {
	skills: string[];
}

const AcquiredSkillsSection: React.FC<AcquiredSkillsSectionProps> = ({
	skills,
}) => {
	return (
		<div className={styles["acquired-skills"]}>
			<h2>Acquired Skills</h2>
			<div className={styles["skills-list"]}>
				{skills.map((skill, index) => {
					return <Chip key={index} text={skill} />;
				})}
			</div>
		</div>
	);
};

export default AcquiredSkillsSection;
