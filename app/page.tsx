"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  FlaskConical,
  Lightbulb,
  Ruler,
  FileText,
  Users,
  Target,
  DollarSign,
} from "lucide-react";

export default function ProjectProposalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4"
          >
            Project Proposal: Renovating the School Laboratory Room
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-300 max-w-3xl mx-auto mb-6"
          >
            A comprehensive project to modernize the school laboratory according
            to contemporary standards, enhancing educational efficiency and
            safety.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Button className="rounded-2xl px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700">
              View Full Proposal
            </Button>
          </motion.div>
        </section>

        {/* Project Rationale and Importance */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Project Rationale and Importance
          </motion.h2>
          <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <div className="space-y-6 text-slate-300">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">
                    Current Challenges
                  </h3>
                  <p className="leading-relaxed">
                    Currently, our school's laboratory room has outdated
                    equipment, non-standard organization, and insufficient
                    safety requirements, which hinders students from acquiring
                    practical skills and teachers from conducting effective
                    lessons. The laboratory environment is not just a place for
                    experiments, but a key environment for developing students'
                    research thinking and creative abilities.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">
                    Project Goals
                  </h3>
                  <p className="leading-relaxed">
                    The goal of this project is to renovate the laboratory room
                    according to modern educational standards and update the
                    equipment to increase students' practical skills and improve
                    teachers' lesson quality. Within the project scope, the
                    internal organization of the laboratory will be improved,
                    safety equipment, new experimental tools, and learning
                    environment comfort will be provided.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">
                    Expected Outcomes
                  </h3>
                  <p className="leading-relaxed">
                    As a result of the project, students will have more
                    opportunities to confirm theoretical knowledge through real
                    experiments, and conditions for research-based education
                    will be created. Teachers will also be able to teach more
                    interesting and effective lessons using new equipment. This
                    project is important for improving the quality of school
                    education and preparing future science-minded professionals.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                    Strategic Importance
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    This renovation represents a critical investment in
                    educational infrastructure that will yield long-term
                    benefits for student learning outcomes, teacher professional
                    development, and institutional excellence in science
                    education.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Brief Project Introduction */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Brief Project Introduction
          </motion.h2>
          <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-700/50 rounded-2xl">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <Lightbulb className="mx-auto mb-4 text-yellow-400" size={48} />
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                  Simple Explanation
                </h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                This project aims to renovate our school's laboratory room,
                equip it with new equipment, and create a safer, cleaner, more
                comfortable environment. This will allow students to study in a
                more interesting and safe environment when conducting
                experiments.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-3xl mb-2">🔬</div>
                  <h4 className="font-semibold text-green-400 mb-2">
                    Modern Equipment
                  </h4>
                  <p className="text-slate-400 text-sm">
                    State-of-the-art laboratory tools and instruments
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h4 className="font-semibold text-blue-400 mb-2">
                    Safety First
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Enhanced safety protocols and equipment
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-3xl mb-2">🎓</div>
                  <h4 className="font-semibold text-purple-400 mb-2">
                    Better Learning
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Improved educational outcomes and engagement
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Information Cards */}
        <section className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
            <CardContent className="p-6 text-center">
              <FileText className="mb-4 mx-auto text-blue-400" size={32} />
              <h3 className="text-lg font-semibold mb-2">Project Type</h3>
              <p className="text-slate-300 text-sm">
                Technology Experiment & Development
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
            <CardContent className="p-6 text-center">
              <DollarSign className="mb-4 mx-auto text-green-400" size={32} />
              <h3 className="text-lg font-semibold mb-2">Funding</h3>
              <p className="text-slate-300 text-sm">25,000,000 MNT</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
            <CardContent className="p-6 text-center">
              <Target className="mb-4 mx-auto text-purple-400" size={32} />
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-slate-300 text-sm">12 Months</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
            <CardContent className="p-6 text-center">
              <Users className="mb-4 mx-auto text-orange-400" size={32} />
              <h3 className="text-lg font-semibold mb-2">Field</h3>
              <p className="text-slate-300 text-sm">Engineering & Technology</p>
            </CardContent>
          </Card>
        </section>

        {/* Project Objectives */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <Ruler className="mb-4 text-blue-400" size={28} />
              <h2 className="text-xl font-semibold mb-2">Renovate Standards</h2>
              <p className="text-slate-300">
                Update laboratory room according to modern educational and
                safety standards.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <FlaskConical className="mb-4 text-green-400" size={28} />
              <h2 className="text-xl font-semibold mb-2">Enhance Equipment</h2>
              <p className="text-slate-300">
                Install new experimental tools, safety equipment, and laboratory
                furniture.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <CheckCircle className="mb-4 text-purple-400" size={28} />
              <h2 className="text-xl font-semibold mb-2">Improve Quality</h2>
              <p className="text-slate-300">
                Increase practical skills, research-based education, and overall
                learning outcomes.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Implementation Plan */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Implementation Plan
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    1
                  </div>
                  <h3 className="text-xl font-semibold">
                    Planning & Preparation
                  </h3>
                </div>
                <p className="text-slate-400 text-sm mb-3">Month 1</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Conduct site assessment and planning</li>
                  <li>Develop detailed project specifications</li>
                  <li>Obtain necessary permits and approvals</li>
                  <li>Create procurement plan and budget allocation</li>
                  <li>Form project team and assign responsibilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">
                    Renovation & Infrastructure
                  </h3>
                </div>
                <p className="text-slate-400 text-sm mb-3">Months 2-4</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Complete structural renovations</li>
                  <li>Install electrical and plumbing upgrades</li>
                  <li>Set up ventilation and safety systems</li>
                  <li>Paint and finish interior spaces</li>
                  <li>Install laboratory furniture and fixtures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">
                    Equipment & Installation
                  </h3>
                </div>
                <p className="text-slate-400 text-sm mb-3">Months 5-8</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Procure and deliver laboratory equipment</li>
                  <li>Install microscopes, centrifuges, and analyzers</li>
                  <li>Set up computer systems and software</li>
                  <li>Calibrate and test all equipment</li>
                  <li>Establish safety protocols and procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    4
                  </div>
                  <h3 className="text-xl font-semibold">
                    Training & Evaluation
                  </h3>
                </div>
                <p className="text-slate-400 text-sm mb-3">Months 9-12</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Conduct staff training programs</li>
                  <li>Develop standard operating procedures</li>
                  <li>Perform final safety inspections</li>
                  <li>Evaluate project outcomes and impact</li>
                  <li>Establish maintenance and support systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Timeline Overview */}
          <Card className="bg-gradient-to-r from-slate-800/70 to-slate-900/70 border-slate-600 rounded-2xl mt-8">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold mb-4 text-center text-blue-400">
                12-Month Project Timeline
              </h4>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1 text-center">
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div className="bg-blue-500 h-2 rounded-full w-1/4"></div>
                  </div>
                  <p className="text-slate-300 text-sm">Planning</p>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div className="bg-green-500 h-2 rounded-full w-1/2"></div>
                  </div>
                  <p className="text-slate-300 text-sm">Renovation</p>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div className="bg-purple-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <p className="text-slate-300 text-sm">Installation</p>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div className="bg-orange-500 h-2 rounded-full w-full"></div>
                  </div>
                  <p className="text-slate-300 text-sm">Training</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Project Goals and Objectives */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Project Goals and Objectives
          </motion.h2>
          <div className="space-y-6">
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">
                  a) General Goal
                </h3>
                <p className="text-slate-300 text-lg">
                  Improve the school laboratory environment and increase
                  educational quality.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  b) Project Objectives
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Renovate the laboratory room according to standards</li>
                  <li>Install new equipment</li>
                  <li>Ensure safety conditions</li>
                  <li>Increase teachers' and students' usage skills</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  c) Project Impact
                </h3>
                <p className="text-slate-300">
                  Students, teachers, and the entire school will benefit from
                  improved learning facilities and enhanced educational
                  outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Situation */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Current Situation
          </motion.h2>
          <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <div className="text-center">
                <FileText className="mx-auto mb-4 text-orange-400" size={48} />
                <p className="text-slate-300 mb-4">
                  Current laboratory conditions assessment and documentation.
                </p>
                <p className="text-slate-400 text-sm">
                  (Attach current laboratory photos and documents here.)
                </p>
                <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
                  <p className="text-slate-300">
                    The existing laboratory requires modernization to meet
                    contemporary educational and safety standards.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Project Results */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Project Results
          </motion.h2>
          <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-green-400">
                    Expected Outcomes
                  </h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Modernized laboratory environment</li>
                    <li>• Updated equipment and safety systems</li>
                    <li>• Enhanced educational quality</li>
                    <li>• Improved student engagement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">
                    Long-term Benefits
                  </h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Better research capabilities</li>
                    <li>• Increased practical learning</li>
                    <li>• Higher student achievement</li>
                    <li>• Sustainable educational improvements</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Project Team */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Project Team
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Leader */}
            <Card className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-600/50 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-xs font-bold rounded-bl-lg">
                TEAM LEADER
              </div>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mb-4 mx-auto">
                  👨‍🏫
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  [Your Name]
                </h3>
                <p className="text-yellow-400 text-center text-sm mb-3">
                  Project Director
                </p>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p>
                    <strong>Expertise:</strong> Education Administration,
                    Laboratory Management
                  </p>
                  <p>
                    <strong>Experience:</strong> 10+ years in educational
                    project management
                  </p>
                  <p>
                    <strong>Role:</strong> Overall project coordination,
                    stakeholder management, final approvals
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 1 */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  🔬
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  [Овог, нэр]
                </h3>
                <p className="text-blue-400 text-center text-sm mb-3">
                  [Эрдмийн зэрэг]
                </p>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p>
                    <strong>Харьяалах сургууль:</strong> [Сургууль]
                  </p>
                  <p>
                    <strong>Expertise:</strong> Chemistry, Laboratory Equipment
                  </p>
                  <p>
                    <strong>Role:</strong> Equipment specification, procurement
                    oversight
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  🏗️
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  [Овог, нэр]
                </h3>
                <p className="text-green-400 text-center text-sm mb-3">
                  [Эрдмийн зэрэг]
                </p>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p>
                    <strong>Харьяалах сургууль:</strong> [Сургууль]
                  </p>
                  <p>
                    <strong>Expertise:</strong> Educational Facility Renovation
                  </p>
                  <p>
                    <strong>Role:</strong> Renovation planning, contractor
                    management
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  📊
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  [Овог, нэр]
                </h3>
                <p className="text-purple-400 text-center text-sm mb-3">
                  Докторант
                </p>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p>
                    <strong>Суралцаж буй сургууль:</strong> [Сургууль]
                  </p>
                  <p>
                    <strong>Expertise:</strong> Curriculum Development, STEM
                    Education
                  </p>
                  <p>
                    <strong>Role:</strong> Curriculum integration, training
                    program development
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 4 */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  🔧
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  [Овог, нэр]
                </h3>
                <p className="text-red-400 text-center text-sm mb-3">
                  [Эрдмийн зэрэг]
                </p>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p>
                    <strong>Харьяалах сургууль:</strong> [Сургууль]
                  </p>
                  <p>
                    <strong>Expertise:</strong> Laboratory Technology, Equipment
                    Maintenance
                  </p>
                  <p>
                    <strong>Role:</strong> Equipment installation, calibration,
                    maintenance planning
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 5 */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  📈
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  [Овог, нэр]
                </h3>
                <p className="text-cyan-400 text-center text-sm mb-3">
                  [Эрдмийн зэрэг]
                </p>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p>
                    <strong>Харьяалах сургууль:</strong> [Сургууль]
                  </p>
                  <p>
                    <strong>Expertise:</strong> Project Management, Budget
                    Control
                  </p>
                  <p>
                    <strong>Role:</strong> Timeline management, budget
                    monitoring, reporting
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Overview */}
          <Card className="bg-gradient-to-r from-slate-800/70 to-slate-900/70 border-slate-600 rounded-2xl mt-8">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold mb-4 text-center text-blue-400">
                Team Expertise Overview
              </h4>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    15+
                  </div>
                  <p className="text-slate-300 text-sm">
                    Years Combined Experience
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    6
                  </div>
                  <p className="text-slate-300 text-sm">Team Members</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    5
                  </div>
                  <p className="text-slate-300 text-sm">Specialized Fields</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    100%
                  </div>
                  <p className="text-slate-300 text-sm">Educational Focus</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Compliance Plan */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Compliance Plan
          </motion.h2>
          <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
            <CardContent className="p-6 text-center">
              <CheckCircle className="mx-auto mb-4 text-green-400" size={48} />
              <p className="text-slate-300 text-lg mb-4">
                The project will meet all requirements of the project selection
                regulations.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-3 bg-slate-800/50 rounded-lg">
                  <h5 className="font-semibold text-green-400 mb-2">
                    Regulatory Compliance
                  </h5>
                  <p className="text-slate-400 text-sm">
                    All safety and educational standards
                  </p>
                </div>
                <div className="p-3 bg-slate-800/50 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">
                    Budget Adherence
                  </h5>
                  <p className="text-slate-400 text-sm">
                    Financial guidelines and reporting
                  </p>
                </div>
                <div className="p-3 bg-slate-800/50 rounded-lg">
                  <h5 className="font-semibold text-purple-400 mb-2">
                    Timeline Commitment
                  </h5>
                  <p className="text-slate-400 text-sm">
                    Project milestones and deadlines
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Potential Risks and Failure Points */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Potential Risks and Failure Points
          </motion.h2>
          <div className="space-y-6">
            <Card className="bg-red-900/20 border-red-700/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  Budget and Funding Risks
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>
                    <strong>Cost Overruns:</strong> Equipment prices may exceed
                    estimates due to market fluctuations or unexpected import
                    duties
                  </li>
                  <li>
                    <strong>Funding Delays:</strong> Delayed disbursement of
                    funds could halt construction and procurement activities
                  </li>
                  <li>
                    <strong>Inflation Impact:</strong> Rising material costs
                    during the 12-month timeline could strain the budget
                  </li>
                  <li>
                    <strong>Hidden Costs:</strong> Unforeseen expenses for
                    permits, inspections, or additional safety requirements
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-orange-900/20 border-orange-700/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-400 flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  Supply Chain and Procurement Risks
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>
                    <strong>Equipment Delays:</strong> Manufacturing or shipping
                    delays from international suppliers
                  </li>
                  <li>
                    <strong>Quality Issues:</strong> Substandard equipment that
                    doesn't meet laboratory standards
                  </li>
                  <li>
                    <strong>Import Restrictions:</strong> Customs delays or
                    regulatory hurdles for scientific equipment
                  </li>
                  <li>
                    <strong>Supplier Reliability:</strong> Vendor bankruptcy or
                    failure to deliver as promised
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-yellow-900/20 border-yellow-700/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  Technical and Operational Risks
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>
                    <strong>Installation Challenges:</strong> Complex equipment
                    requiring specialized technicians not available locally
                  </li>
                  <li>
                    <strong>Infrastructure Limitations:</strong> Building's
                    electrical or ventilation system inadequate for lab
                    requirements
                  </li>
                  <li>
                    <strong>Calibration Issues:</strong> Equipment
                    malfunctioning after installation due to improper setup
                  </li>
                  <li>
                    <strong>Maintenance Requirements:</strong> Lack of local
                    technical support for ongoing equipment maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-purple-700/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  Human and Organizational Risks
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>
                    <strong>Staff Resistance:</strong> Teachers or
                    administrators resistant to new technology or procedures
                  </li>
                  <li>
                    <strong>Training Gaps:</strong> Insufficient training
                    leading to improper equipment use or safety violations
                  </li>
                  <li>
                    <strong>Turnover:</strong> Key project team members leaving
                    during implementation
                  </li>
                  <li>
                    <strong>Scope Creep:</strong> Uncontrolled changes adding
                    requirements beyond original scope
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/70 border-slate-600 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                  External and Environmental Risks
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>
                    <strong>Regulatory Changes:</strong> New safety or
                    educational standards implemented during project
                  </li>
                  <li>
                    <strong>Political Factors:</strong> Changes in school
                    administration or funding priorities
                  </li>
                  <li>
                    <strong>Natural Disasters:</strong> Events that could damage
                    the facility during construction
                  </li>
                  <li>
                    <strong>Economic Instability:</strong> Currency fluctuations
                    affecting import costs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-700/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-300">
                  Critical Failure Scenarios
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-red-900/20 rounded-lg border border-red-700/30">
                    <h4 className="font-semibold text-red-400 mb-2">
                      Complete Project Failure
                    </h4>
                    <p className="text-slate-300 text-sm">
                      If funding is cut mid-project and no contingency budget
                      exists, the laboratory could be left in a partially
                      renovated, unusable state.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-900/20 rounded-lg border border-orange-700/30">
                    <h4 className="font-semibold text-orange-400 mb-2">
                      Equipment Incompatibility
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Purchasing equipment from different manufacturers without
                      compatibility checks could result in systems that cannot
                      integrate properly.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
                    <h4 className="font-semibold text-yellow-400 mb-2">
                      Safety Compromises
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Rushing installation to meet deadlines could lead to
                      safety violations, making the lab unusable until
                      corrections are made.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Detailed Cost Breakdown
          </motion.h2>
          <div className="space-y-6">
            {/* Core Laboratory Equipment & Tools */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Core Laboratory Equipment & Tools
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-slate-300">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="text-left py-2">Item</th>
                        <th className="text-center py-2">
                          Est. Unit Price (USD)
                        </th>
                        <th className="text-center py-2">Est. Price (MNT)</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Microscope (basic lab / student grade)
                        </td>
                        <td className="text-center py-2">$300–$800</td>
                        <td className="text-center py-2">
                          ~1,050,000–2,800,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Pipette set (multi‑volume, manual)
                        </td>
                        <td className="text-center py-2">$50–$200</td>
                        <td className="text-center py-2">
                          ~175,000–700,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Centrifuge (mini/bench‑top)</td>
                        <td className="text-center py-2">$70–$200</td>
                        <td className="text-center py-2">
                          ~245,000–700,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Lab balance (digital)</td>
                        <td className="text-center py-2">$100–$300</td>
                        <td className="text-center py-2">
                          ~350,000–1,050,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">pH meter / basic analyzer</td>
                        <td className="text-center py-2">$80–$250</td>
                        <td className="text-center py-2">
                          ~280,000–875,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Water bath / dry bath</td>
                        <td className="text-center py-2">$150–$400</td>
                        <td className="text-center py-2">
                          ~525,000–1,400,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Magnetic stirrer / hotplate</td>
                        <td className="text-center py-2">$100–$300</td>
                        <td className="text-center py-2">
                          ~350,000–1,050,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Vortex mixer / small shaker</td>
                        <td className="text-center py-2">$80–$250</td>
                        <td className="text-center py-2">
                          ~280,000–875,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Glassware Set (beakers, flasks, test tubes)
                        </td>
                        <td className="text-center py-2">$50–$200</td>
                        <td className="text-center py-2">
                          ~175,000–700,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Consumables (tips, tubes, gloves, wipes)
                        </td>
                        <td className="text-center py-2">$100–$300</td>
                        <td className="text-center py-2">
                          ~350,000–1,050,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Safety gear (goggles, coats, gloves)
                        </td>
                        <td className="text-center py-2">$50–$150</td>
                        <td className="text-center py-2">
                          ~175,000–525,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Refrigerator / small lab fridge
                        </td>
                        <td className="text-center py-2">$400–$1200</td>
                        <td className="text-center py-2">
                          ~1,400,000–4,200,000 MNT
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          Fume hood / ventilation (optional)
                        </td>
                        <td className="text-center py-2">$1000–$5000</td>
                        <td className="text-center py-2">
                          ~3,500,000–17,500,000 MNT
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
                  <p className="text-yellow-400 font-semibold">
                    💡 Total (basic functional setup)
                  </p>
                  <p className="text-slate-300">
                    👉 Low range estimate: ~$2,380 → ~8,330,000 MNT
                  </p>
                  <p className="text-slate-300">
                    👉 High range estimate: ~$9,150 → ~32,025,000 MNT
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    (This assumes a small lab with essential analytical and prep
                    tools — prices can be higher for more advanced or
                    specialized instruments.)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Furniture & Room Setup */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">
                  🪑 Furniture & Room Setup
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-slate-300">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="text-left py-2">Item</th>
                        <th className="text-center py-2">
                          Est. Unit Price (USD)
                        </th>
                        <th className="text-center py-2">Est. Price (MNT)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Lab benches / worktables (per bench)
                        </td>
                        <td className="text-center py-2">$200–$800</td>
                        <td className="text-center py-2">
                          ~700,000–2,800,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Shelving / storage units</td>
                        <td className="text-center py-2">$100–$400</td>
                        <td className="text-center py-2">
                          ~350,000–1,400,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Chairs / stools (lab safe)</td>
                        <td className="text-center py-2">$50–$150</td>
                        <td className="text-center py-2">
                          ~175,000–525,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Whiteboard / notice board</td>
                        <td className="text-center py-2">$30–$100</td>
                        <td className="text-center py-2">
                          ~105,000–350,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Lighting upgrades (bright LED)</td>
                        <td className="text-center py-2">$50–$200</td>
                        <td className="text-center py-2">
                          ~175,000–700,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Paint / decor</td>
                        <td className="text-center py-2">$100–$300</td>
                        <td className="text-center py-2">
                          ~350,000–1,050,000 MNT
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">Electrical/outlet upgrades</td>
                        <td className="text-center py-2">$100–$500</td>
                        <td className="text-center py-2">
                          ~350,000–1,750,000 MNT
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
                  <p className="text-green-400 font-semibold">
                    💡 Furniture & renovation total estimate:
                  </p>
                  <p className="text-slate-300">
                    👉 Low: ~$630 → ~2,200,000 MNT
                  </p>
                  <p className="text-slate-300">
                    👉 High: ~$2,850 → ~9,975,000 MNT
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Utilities & Installation */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  🔌 Utilities & Installation
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-slate-300">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="text-left py-2">Item</th>
                        <th className="text-center py-2">
                          Est. Unit Price (USD)
                        </th>
                        <th className="text-center py-2">Est. Price (MNT)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Electrical wiring/outlets</td>
                        <td className="text-center py-2">$200–$800</td>
                        <td className="text-center py-2">
                          ~700,000–2,800,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Plumbing/gas lines (if needed)</td>
                        <td className="text-center py-2">$300–$1,000</td>
                        <td className="text-center py-2">
                          ~1,050,000–3,500,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Air conditioning / ventilation</td>
                        <td className="text-center py-2">$300–$1,200</td>
                        <td className="text-center py-2">
                          ~1,050,000–4,200,000 MNT
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">Safety shower/eyewash station</td>
                        <td className="text-center py-2">$100–$400</td>
                        <td className="text-center py-2">
                          ~350,000–1,400,000 MNT
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
                  <p className="text-purple-400 font-semibold">
                    💡 Utility & infrastructure estimate:
                  </p>
                  <p className="text-slate-300">
                    👉 Low: ~$900 → ~3,150,000 MNT
                  </p>
                  <p className="text-slate-300">
                    👉 High: ~$3,400 → ~11,900,000 MNT
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Grand Total */}
            <Card className="bg-gradient-to-r from-blue-900/70 to-purple-900/70 border-slate-600 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-center text-yellow-400">
                  📊 Grand Total Estimate
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-slate-300">
                    <thead>
                      <tr className="border-b border-slate-500">
                        <th className="text-left py-3">Category</th>
                        <th className="text-center py-3">
                          Low End (USD / MNT)
                        </th>
                        <th className="text-center py-3">
                          High End (USD / MNT)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-600">
                        <td className="py-3 font-medium">Equipment & Tools</td>
                        <td className="text-center py-3">
                          $2,380 / ~8.33M MNT
                        </td>
                        <td className="text-center py-3">
                          $9,150 / ~32.0M MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-600">
                        <td className="py-3 font-medium">Furniture & Decor</td>
                        <td className="text-center py-3">$630 / ~2.20M MNT</td>
                        <td className="text-center py-3">
                          $2,850 / ~9.98M MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-600">
                        <td className="py-3 font-medium">
                          Utilities & Install
                        </td>
                        <td className="text-center py-3">$900 / ~3.15M MNT</td>
                        <td className="text-center py-3">
                          $3,400 / ~11.9M MNT
                        </td>
                      </tr>
                      <tr className="bg-slate-800/50">
                        <td className="py-3 font-bold text-yellow-400">
                          Grand Total
                        </td>
                        <td className="text-center py-3 font-bold text-green-400">
                          ~$3,910 / ~13.7M MNT
                        </td>
                        <td className="text-center py-3 font-bold text-red-400">
                          ~$15,400 / ~53.9M MNT
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-center text-slate-400 text-sm mt-4">
                  *All prices are estimates and may vary based on suppliers,
                  location, and specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold mb-4"
          >
            Project Impact
          </motion.h2>
          <p className="text-slate-300 max-w-3xl mx-auto mb-6">
            This renovation will transform an outdated laboratory into a modern,
            safe, and efficient learning environment, significantly enhancing
            educational quality and preparing students for future scientific
            careers.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              className="rounded-2xl px-8 border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Download Full Proposal
            </Button>
            <Button className="rounded-2xl px-8 bg-green-600 hover:bg-green-700">
              Approve Project
            </Button>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
