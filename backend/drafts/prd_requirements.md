# Requirements Document: Student-Led Conference Manager (SLCM)

## 1. Document Control & SDLC Stage
- **SDLC Stage:** Requirements Definition & Analysis
- **Stage Focus:** User needs, functional/non-functional requirements, business rules, traceability, and testable acceptance criteria for the Student-Led Conference Manager (SLCM) platform.
- **Target Audience:** Product Management, Engineering, QA, and Stakeholders (School Administration, Teachers, Students, Parents).

## 2. Executive Summary & Objectives
The Student-Led Conference Manager (SLCM) is a web-based platform designed to streamline the scheduling, preparation, and execution of student-led conferences in K-12 educational environments. Traditional conference scheduling relies on disjointed emails, paper sign-ups, and unstandardized preparation materials. SLCM centralizes scheduling, standardizes artifact collection, and provides structured agendas to foster student ownership and meaningful communication between students, parents, and educators.

### 2.1 Core Objectives
- Reduce administrative overhead for teachers and school staff by automating conference scheduling and slot allocation.
- Empower students to take ownership of their learning by organizing portfolios and guiding the conference conversation.
- Provide parents with seamless access to booking, preparation guides, and real-time conference feedback.
- Ensure strict data privacy compliance (FERPA/COPPA) across all user interactions.

## 3. Scope
### 3.1 In-Scope
- User authentication and role-based access control (Admin, Teacher, Student, Parent).
- Automated and manual calendar scheduling algorithms for conference slots.
- Digital student portfolio storage and artifact tagging.
- Guided conference agenda templates for students.
- Automated email and in-app notifications/reminders.
- Post-conference feedback and goal-tracking surveys.

### 3.2 Out-of-Scope
- General gradebook management or assignment grading (integration with existing SIS/LMS is out-of-scope for Phase 1).
- Video conferencing hosting (SLCM will integrate via deep links to external providers like Zoom or Google Meet).
- Financial transactions or fee processing.

## 4. User Personas & Needs
| Persona | Description | Core Needs |
| :--- | :--- | :--- |
| **School Admin** | Principal, Vice Principal, or Counselor | System-wide configuration, audit logs, oversight of conference completion rates, and policy enforcement. |
| **Teacher** | Classroom or Advisory Instructor | Defining availability windows, reviewing student portfolios prior to conferences, and adding observational notes. |
| **Student** | Enrolled Learner (Grades 4-12) | Selecting artifacts for display, reviewing self-assessments, and practicing the conference script using templates. |
| **Parent / Guardian** | Family member responsible for attendance | Easy mobile-friendly booking, viewing student portfolios, and participating in conferences. |

## 5. Functional Requirements
Functional requirements define specific system behaviors, inputs, processes, and outputs.

| Req ID | Module | Description | Priority |
| :--- | :--- | :--- | :--- |
| **FR-01** | Authentication | The system shall support role-based login (Admin, Teacher, Student, Parent) with Single Sign-On (SSO) integration via Google and Microsoft 365. | High |
| **FR-02** | Scheduling | Teachers shall be able to define recurring or custom availability blocks (e.g., 15-minute intervals) for booking. | High |
| **FR-03** | Scheduling | Parents shall be able to view real-time teacher availability and book, reschedule, or cancel conference slots up to 24 hours prior to the event. | High |
| **FR-04** | Portfolio | Students shall be able to upload, tag, and organize digital artifacts (documents, images, links) into a conference portfolio. | Medium |
| **FR-05** | Agenda | The system shall provide a standardized, customizable 4-step conference agenda template (Welcome, Strengths, Growth Areas, Goal Setting). | Medium |
| **FR-06** | Notifications | The system shall automatically dispatch email and SMS reminders to parents and teachers 48 hours and 2 hours prior to a scheduled conference. | High |
| **FR-07** | Feedback | Teachers and parents shall be able to submit post-conference reflection ratings and final learning goals within 24 hours of conference completion. | Low |

## 6. Non-Functional Requirements
Non-functional requirements outline system quality attributes, performance standards, and security constraints.

| Req ID | Category | Description | Target Metric |
| :--- | :--- | :--- | :--- |
| **NFR-01** | Performance | Page load times for scheduling dashboards and portfolios under normal load. | $\le 2.0$ seconds |
| **NFR-02** | Scalability | System capacity to handle concurrent booking requests during peak reporting periods. | Support 5,000 concurrent active users per school district |
| **NFR-03** | Security | Data encryption standards for data at rest (AES-256) and in transit (TLS 1.3). | 100% compliance |
| **NFR-04** | Compliance | Adherence to student data privacy frameworks including FERPA and COPPA regulations. | Zero critical audit findings |
| **NFR-05** | Accessibility | User interface compliance with Web Content Accessibility Guidelines (WCAG) 2.1 AA standards. | 100% compliant elements |
| **NFR-06** | Availability | System uptime availability excluding scheduled maintenance windows. | 99.9% uptime per calendar month |

## 7. Business Rules
- **BR-01:** A single conference slot cannot be double-booked; once a parent selects a time slot, it must immediately transition to "Reserved" status across all user views.
- **BR-02:** Students must have at least three tagged learning artifacts in their portfolio before submitting their agenda for teacher review.
- **BR-03:** Parents must be associated with the student record via the administrative database import to view private student portfolio details.
- **BR-04:** Modifications to scheduled conferences (rescheduling/cancellation) are locked 24 hours prior to the start time unless overridden by a school administrator.

## 8. Assumptions, Risks, & Dependencies
### 8.1 Assumptions
- Schools will provide accurate roster and user demographic data via CSV or SIS sync prior to system launch.
- Users (parents and students) have access to internet-connected devices (smartphones, tablets, or computers).
- Teachers will establish their availability calendars at least three weeks prior to the conference window.

### 8.2 Risks & Mitigations
- **Risk 1:** Low parent adoption rates or difficulty booking slots.
  - *Mitigation:* Provide multilingual SMS notifications, intuitive mobile-responsive UI, and school-hosted help sessions.
- **Risk 2:** Data privacy breaches exposing minor student records.
  - *Mitigation:* Implement strict role-based access controls, data anonymization logs, and rigorous automated security scanning.
- **Risk 3:** Teacher pushback against new digital workflows.
  - *Mitigation:* Involve lead teachers in the requirements feedback loop and provide concise asynchronous training modules.

### 8.3 Dependencies
- Integration capability with external identity providers (Google Workspace for Education, Microsoft Azure AD).
- Reliable third-party transactional email and SMS delivery services (e.g., SendGrid, Twilio).

## 9. Requirements Traceability Matrix (RTM)
This matrix maps high-level user needs and business objectives to functional requirements and acceptance criteria, ensuring complete coverage.

| User Need / Objective | Functional Req ID | Verification Method | Acceptance Criteria ID |
| :--- | :--- | :--- | :--- |
| Automated booking without overlap | FR-02, FR-03, BR-01 | Automated Test / UI Review | AC-SCH-01, AC-SCH-02 |
| Centralized student artifact storage | FR-04, BR-02 | Integration Test / User Story Review | AC-POR-01, AC-POR-02 |
| Timely notification of schedules | FR-06 | System Log Audit / Email Test | AC-NOT-01 |
| Data privacy and role segregation | FR-01, NFR-03, NFR-04 | Security Scan / Penetration Test | AC-SEC-01 |

## 10. Testable Acceptance Criteria
Each requirement must be verified against explicit, binary pass/fail criteria.

### 10.1 Scheduling Module
- **AC-SCH-01:** Given a teacher has configured open time slots, when a parent selects an available slot and confirms, then the slot status updates instantly to "Reserved" and is removed from public availability lists.
- **AC-SCH-02:** Given a slot is marked as "Reserved", when a second parent attempts to select the exact same slot concurrently, then the system displays an error message stating the slot is unavailable and prompts selection of an alternative time.

### 10.2 Portfolio & Artifact Module
- **AC-POR-01:** Given a student is logged into their dashboard, when they upload a PDF document under 25MB and tag it to a core subject, then the file is successfully stored and displayed in their active portfolio view.
- **AC-POR-02:** Given a student has fewer than three artifacts tagged, when they attempt to submit their conference agenda, then the system blocks submission and displays a warning banner outlining the minimum requirement.

### 10.3 Notification Module
- **AC-SCH-01 / AC-NOT-01:** Given a conference is scheduled 48 hours in the future, when the cron notification job runs, then an automated email and SMS containing the conference details and video link are successfully dispatched to both parent and teacher.

### 10.4 Security & Access Control
- **AC-SEC-01:** Given a user authenticated with the "Parent" role attempts to access the administrative configuration route via direct URL injection, then the system denies access (HTTP 403) and redirects the user to their designated dashboard.
