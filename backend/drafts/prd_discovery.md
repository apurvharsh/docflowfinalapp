# Discovery Phase Findings and Requirements: Manipal Food Delivery Service

## 1. Document Control and Stage Declaration
- SDLC Stage: Discovery (Requirements Gathering, User Research, and Feasibility Analysis)
- Target Audience: Product Management, Engineering, Operations, and Stakeholders
- Status: Draft v1.0
- Purpose: To synthesize initial user research, current-state operational friction points, user needs, alternative approaches, and baseline requirements for the proposed Manipal campus food delivery service.

## 2. Executive Summary and Objectives
Manipal University campus hosts a dense student and faculty population residing across multiple hostels, academic blocks, and residential quarters. Current food delivery experiences on campus suffer from high latency, restricted delivery gate access, lack of precise indoor/campus mapping, and fragmented vendor options. The Discovery phase focuses on evaluating these challenges to establish a foundational product scope.

### Objectives
- Streamline food ordering from local campus outlets and nearby external vendors specifically for the Manipal ecosystem.
- Reduce average delivery times to under 30 minutes within campus boundaries.
- Provide reliable delivery points that account for strict hostel entry policies and sprawling campus geography.
- Create a sustainable unit economic model supporting student budgets.

## 3. Current-State Findings and Research Summary
User interviews and observational studies conducted across Manipal housing blocks (e.g., Blocks 1 through 23, MIT hostels, KMC hostels) and commercial hubs (Tiger Circle, End Point Road) yielded the following insights:

- **Access Bottlenecks:** Commercial delivery executives (Swiggy, Zomato) are frequently denied entry past main campus gates or hostel security desks, forcing students to walk long distances to collect orders.
- **Peak Hour Congestion:** Dinner hours (8:00 PM – 10:30 PM) experience massive surges, leading to order rejections, missing drivers, and extended wait times.
- **Address Ambiguity:** Standard GPS fails within campus interiors due to dense building structures, unnamed internal pathways, and complex hostel naming conventions.
- **Vendor Fragmentation:** Many popular campus-adjacent budget eateries lack digital storefronts or rely on inefficient WhatsApp/phone-call ordering systems.

## 4. User Personas and Needs
- **Student User (Primary):** Needs fast, affordable meals delivered directly to designated hostel drop-off zones or academic buildings between classes or late-night study sessions. Requires UPI payment support and transparent split-billing options for group orders.
- **Campus Delivery Partner (Secondary):** Needs clear, campus-specific micro-navigation, efficient batch-order routing, and secure drop-off verification to maximize hourly earnings.
- **Vendor/Merchant Partner (Tertiary):** Needs a lightweight tablet/web dashboard to manage incoming orders, update live menu availability, and track rider pickup status without disrupting counter operations.

## 5. Alternative Approaches Considered
- **Do Nothing / Status Quo:** Rely on existing mainstream aggregators. *Result:* Rejected due to persistent campus entry barriers and high delivery failure rates.
- **White-Label Existing SaaS Delivery Platform:** License a generic multi-vendor marketplace engine. *Result:* Considered viable for MVP, but requires heavy customization of the mapping layer to handle Manipal's specific hostel geolocation database.
- **Peer-to-Peer Student Delivery Network:** Utilize fellow students with bicycles/scooters for campus-only legs. *Result:* High operational overhead for shift management; selected as a Phase 2 consideration instead of Day 1 MVP.

## 6. Functional Requirements
- **FR-01: Campus Geofencing and Address Resolution:** The system must restrict delivery zones to verified Manipal campus boundaries and allow users to select specific campus landmarks, hostel blocks, or academic buildings as delivery points.
- **FR-02: Vendor Onboarding and Catalog Management:** Merchants must be able to update item availability, pricing, and operating hours via a mobile-optimized web interface.
- **FR-03: Order Placement and Payment Integration:** The platform must support secure digital payments (UPI, credit/debit cards, net banking) alongside an integrated digital wallet for instant refunds.
- **FR-04: Real-Time Order Tracking:** Users must be able to view live status updates (Order Placed, Preparing, Out for Delivery, Delivered) paired with estimated time of arrival (ETA).
- **FR-05: Hostel Drop-off Coordination:** The rider interface must provide specific instructions for security guard-rails and designated hostel reception drop zones.

## 7. Non-Functional Requirements
- **NFR-01: Performance:** The mobile application must load product catalogs within 2 seconds on standard 4G connections common across campus areas.
- **NFR-02: Scalability:** The backend infrastructure must support a minimum concurrent load of 2,000 active users during peak evening ordering windows.
- **NFR-03: Availability:** The core ordering service must maintain 99.5% uptime during operational hours (10:00 AM to 2:00 AM).
- **NFR-04: Data Security:** User profile data, phone numbers, and payment transactions must comply with local data privacy regulations, using end-to-end encryption for sensitive payloads.

## 8. Assumptions, Dependencies, and Risks
### Assumptions
- Hostel wardens and campus security will permit registered student or vetted delivery personnel to access designated drop-off zones.
- Participating vendors have stable internet connectivity and compatible mobile devices for order receipt.

### Dependencies
- Integration with third-party mapping/geolocation services for campus route optimization.
- Availability of payment gateway partners supporting reliable micro-transactions.

### Risks
- **Regulatory/Campus Policy Shifts:** Changes in university security policies regarding external personnel entry could disrupt fulfillment models. *Mitigation:* Implement a centralized hostel-gate rendezvous handover protocol.
- **Seasonality:** Demand drops significantly during university semester breaks and vacations. *Mitigation:* Introduce flexible, reduced-staff operational schedules during academic breaks.

## 9. Discovery Acceptance Criteria
The Discovery phase will be formally closed and ready to transition to the Design/Architecture phase upon meeting the following criteria:
- [ ] Sign-off on user research findings by product and operations leads.
- [ ] Approval of baseline functional and non-functional requirements by engineering leads.
- [ ] Preliminary feasibility validation of campus mapping and hostel drop-off point taxonomy.
- [ ] Completion of initial vendor interest survey with at least 15 campus-adjacent eateries.
