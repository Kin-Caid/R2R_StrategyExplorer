        window.INITIAL_R2R_DATA = [
            {
                id: "W0-01",
                title: "Ownership & Leadership Assignment",
                wave: 0,
                timeframe: "2026 (First 30 Days)",
                rationale: "Assign executive sponsors and commitment owners across Strategy Office and divisions.",
                keyOutput: "Documented Leadership & Ownership Charter",
                prereqs: [],
                unlocks: ["3.1", "2.1", "3.5", "1.4", "2.3", "1.1", "1.7"],
                phases: { p1: "Assign executive sponsors; establish PMO handoff structure." }
            },
            {
                id: "W0-02",
                title: "Comprehensive Workload Analysis Scoping",
                wave: 0,
                timeframe: "2026",
                rationale: "Establish baseline staffing capacity to prevent overcommitting before R2R rollout.",
                keyOutput: "Workload Analysis Scope & Capacity Baseline",
                prereqs: [],
                unlocks: ["1.3", "3.2", "1.1"],
                phases: { p1: "Scope FTE baseline across field, technical, and administrative staff." }
            },
            {
                id: "W0-03",
                title: "Executive Adoption of Equity Indicators",
                wave: 0,
                timeframe: "2026",
                rationale: "Executive Team decision on Equity Data Team recommended indicators (EDT PCA).",
                keyOutput: "Formal Executive Adoption Decision on EDT Indicators",
                prereqs: [],
                unlocks: ["1.4", "2.1", "2.2", "3.3"],
                phases: { p1: "Executive Team formal decision to adopt or document specific blockers." }
            },
            {
                id: "W0-04",
                title: "City Attorney Legal Opinion on Equity Criteria",
                wave: 0,
                timeframe: "2026",
                rationale: "Ensure socioeconomic place-based criteria are legally defensible.",
                keyOutput: "City Attorney Written Legal Opinion",
                prereqs: [],
                unlocks: ["3.3", "1.4"],
                phases: { p1: "Request and secure formal opinion on place-based criteria." }
            },
            {
                id: "W0-05",
                title: "PMO Model & Scope Sign-Off",
                wave: 0,
                timeframe: "2026",
                rationale: "Define PMO decision authority (RACI) vs division authority before building tracker.",
                keyOutput: "Signed PMO Scope & Authority Document",
                prereqs: [],
                unlocks: ["3.5"],
                phases: { p1: "Circulate PMO scope with division leads and secure sign-off." }
            },
            {
                id: "W0-06",
                title: "CAG Budget & Compensation Confirmation",
                wave: 0,
                timeframe: "2026",
                rationale: "Secure approved funding for stipends, translation, and logistics before recruitment.",
                keyOutput: "Confirmed CAG Participation Budget Line",
                prereqs: [],
                unlocks: ["1.2"],
                phases: { p1: "Lock line-item budget for member compensation and support." }
            },
            {
                id: "W0-07",
                title: "IT Centralization Impact Assessment",
                wave: 0,
                timeframe: "2026",
                rationale: "Document Data Analytics & Data Science staff at risk of moving to CTM.",
                keyOutput: "DA/DS Capacity Protection Case Document",
                prereqs: [],
                unlocks: ["2.3", "1.3"],
                phases: { p1: "Document critical data functions that must remain within AWP." }
            },
            {
                id: "3.1",
                title: "Define Clear and Achievable Levels of Service",
                wave: 1,
                timeframe: "2026–2028",
                rationale: "Build shared internal clarity on what AWP promises and what it cannot deliver.",
                keyOutput: "Approved Executive Level of Service (LOS) Framework",
                prereqs: ["W0-01", "2.3", "1.4"],
                unlocks: ["3.2", "3.3", "2.2", "3.6", "1.6"],
                phases: {
                    p1: "Inventory current service norms, define service categories, draft & adopt LOS Framework.",
                    p2: "Integrate LOS into Maximo and DSS; initiate annual performance reviews.",
                    p3: "Conduct 2nd LOS revision cycle using actual performance data.",
                    p4: "Publish annual performance report; embed PMO ownership permanently."
                }
            },
            {
                id: "2.1",
                title: "Create a Holistic Watershed Health Framework",
                wave: 1,
                timeframe: "2026–2028",
                rationale: "Establish an integrated picture of watershed health across flood, quality, and equity.",
                keyOutput: "Adopted Watershed Health Framework (WHF 1.0)",
                prereqs: ["W0-01", "W0-03"],
                unlocks: ["2.2", "2.5", "3.3", "2.8", "3.5"],
                phases: {
                    p1: "Inventory indicators, resolve EII transition, publish WHF 1.0 with known limitations.",
                    p2: "Transition CIP prioritization from problem scores to WHF criteria.",
                    p3: "Publish 1st annual watershed report cards for all major watersheds.",
                    p4: "Embed WHF into annual business planning and multi-departmental contexts."
                }
            },
            {
                id: "3.5",
                title: "Create a Portfolio Management Office",
                wave: 1,
                timeframe: "2026–2028",
                rationale: "Central coordination hub to track dependencies, capacity, and commitment trade-offs.",
                keyOutput: "Integrated Portfolio Tracker & Decision Authority RACI",
                prereqs: ["W0-01", "W0-05"],
                unlocks: ["2.7", "3.3", "3.2", "3.6"],
                phases: {
                    p1: "Scope PMO, build integrated portfolio tracker, publish Decision Authority RACI.",
                    p2: "Connect portfolio tracker to WHF/LOS frameworks; expand RACI to Wave 2.",
                    p3: "Conduct mid-plan portfolio review; integrate PMO into annual budget cycle.",
                    p4: "Transition PMO to ongoing permanent operational function."
                }
            },
            {
                id: "1.4",
                title: "Create a Shared Framework for Equity",
                wave: 1,
                timeframe: "2026–2028",
                rationale: "Formalize equity indicators and decision criteria so equity practice is consistent.",
                keyOutput: "Formally Adopted Equity Framework Document & Toolkit",
                prereqs: ["W0-01", "W0-03", "W0-04"],
                unlocks: ["3.3", "3.4", "2.1", "3.1"],
                phases: {
                    p1: "Adopt EDT indicators, draft operational framework, publish Equity Toolkit, apply to 3 decisions.",
                    p2: "Embed equity indicators as required layer in WHF assessments and CIP scoring.",
                    p3: "Incorporate CAG-defined priorities; refine data to sub-watershed scale.",
                    p4: "Publish decade-end equity outcomes assessment; transition stewardship."
                }
            },
            {
                id: "2.3",
                title: "Enhance Data and Modeling Capabilities",
                wave: 1,
                timeframe: "2026–2028",
                rationale: "Build the data infrastructure, linear asset Maximo integration, and 2D flood model.",
                keyOutput: "Data Health Inventory & Local Flood 2D Decision",
                prereqs: ["W0-01", "W0-07"],
                unlocks: ["2.1", "2.2", "2.5", "3.1", "3.2", "2.4", "2.7"],
                phases: {
                    p1: "Conduct Data Health Inventory, establish standards, resolve Local Flood 2D funding decision.",
                    p2: "Integrate flood/erosion/quality/equity in DSS; complete Maximo linear asset integration.",
                    p3: "Publish Local Flood 2D Modeling outputs publicly; retire fragile data assets.",
                    p4: "Transfer data ownership to documented SOPs; publish decade-end assessment."
                }
            },
            {
                id: "1.1",
                title: "Create a Dedicated Community Liaison Role",
                wave: 1,
                timeframe: "2026–2028",
                rationale: "Institutional anchor for building sustained relationships with underrepresented communities.",
                keyOutput: "Hired Community Liaison & Formal Intermediary Partnerships",
                prereqs: ["W0-01", "W0-02"],
                unlocks: ["1.2", "1.5", "1.6", "2.4", "1.7"],
                phases: {
                    p1: "Define role scope, hire permanent FTE, map community landscape, formalize 3-5 partnerships.",
                    p2: "Anchor CAG launch (1.2); integrate community input into CIP prioritization.",
                    p3: "Assess staffing capacity; publish community engagement section in progress report.",
                    p4: "Contribute community voice to decade-end assessment; transfer knowledge."
                }
            },
            {
                id: "1.7",
                title: "Enhance Readiness for Emergencies",
                wave: 1,
                timeframe: "2026–2028",
                rationale: "Internal organizational wiring and equipment inspection required for disaster response.",
                keyOutput: "Emergency Readiness Gap Assessment & Roles Document",
                prereqs: ["W0-01", "1.1"],
                unlocks: ["1.8", "1.5", "1.6", "2.7"],
                phases: {
                    p1: "Complete readiness gap audit, document emergency roles for all staff, establish inspection schedule.",
                    p2: "Embed after-action review post-event practice; expand multilingual alert channels.",
                    p3: "Feed 10-year event history into climate readiness planning.",
                    p4: "Formalize contribution to HSEM citywide emergency framework."
                }
            },
            {
                id: "2.2",
                title: "Create Clear and Meaningful Watershed Targets",
                wave: 2,
                timeframe: "2027–2030",
                rationale: "Set specific, measurable targets co-developed with community across health domains.",
                keyOutput: "Formally Adopted Watershed Target Set & Baselines",
                prereqs: ["2.1", "2.3", "1.2"],
                unlocks: ["3.3", "2.5", "3.6", "2.4"],
                phases: {
                    p1: "Inventory candidate metrics, resolve equity indicators, design co-development process.",
                    p2: "Establish baselines, co-develop targets with CAG, executive team formally adopts target set.",
                    p3: "Review 3-year trend data; incorporate Local Flood 2D model data into baselines.",
                    p4: "Publish decade-end watershed health assessment and disparity analysis."
                }
            },
            {
                id: "3.3",
                title: "Implement an Equitable Decision-Making Approach",
                wave: 2,
                timeframe: "2027–2030",
                rationale: "Reparative investment framework that weights equity in CIP and spending decisions.",
                keyOutput: "Adopted Environmental Reparative Investment Framework",
                prereqs: ["1.4", "2.1", "3.1", "W0-04"],
                unlocks: ["2.5", "3.4", "3.5", "2.6"],
                phases: {
                    p1: "Complete legal review, establish baseline SVI spending, pilot framework on 1 CIP cycle.",
                    p2: "Formally adopt framework, apply to 1st full CIP ranking, integrate into PMO portfolio scoring.",
                    p3: "Revise criteria based on 3-year data; integrate Local Flood 2D modeling equity data.",
                    p4: "Conduct decade-end equity investment audit and community co-authored assessment."
                }
            },
            {
                id: "3.2",
                title: "Center Asset Management in Decision-Making",
                wave: 2,
                timeframe: "2027–2030",
                rationale: "Connect asset condition and risk scores directly to CIP ranking and work orders.",
                keyOutput: "Complete Asset Registry & Open Channel Inspection Launch",
                prereqs: ["3.1", "2.3", "W0-02"],
                unlocks: ["2.5", "3.5", "3.7"],
                phases: {
                    p1: "Confirm ownership of all 3 asset classes, get linear assets into Maximo, launch channel inspections.",
                    p2: "Run 1st full CIP cycle with AMP-weighted scoring; produce life-cycle cost budget submission.",
                    p3: "Complete 2nd full inspection cycle; contribute lifecycle data to 100-Year Plan.",
                    p4: "Publish decade-end infrastructure condition assessment."
                }
            },
            {
                id: "1.3",
                title: "Cultivate a Strong, Inclusive Workforce",
                wave: 2,
                timeframe: "2027–2030",
                rationale: "Equitable development, field staff advancement pathways, and DA/DS retention.",
                keyOutput: "Comprehensive Workload Analysis & L&D Strategy",
                prereqs: ["W0-02", "W0-07"],
                unlocks: ["3.7", "3.8"],
                phases: {
                    p1: "Complete workload analysis, audit training access, document DA/DS protection plan.",
                    p2: "Adopt L&D strategy, open field advancement pathways, deliver Spanish training.",
                    p3: "Refine advancement tracks based on cohort 1; assess skill alignment against R2R demands.",
                    p4: "Publish decade-end workforce equity assessment."
                }
            },
            {
                id: "1.5",
                title: "Collaborate with Partners to Protect Vulnerable Populations",
                wave: 2,
                timeframe: "2027–2030",
                rationale: "Formalized protocols with HSO, ARR, and outreach teams for flood safety.",
                keyOutput: "Signed MOUs with HSO & ARR + Storm Threshold Protocol",
                prereqs: ["1.1", "1.7"],
                unlocks: ["1.8", "2.7"],
                phases: {
                    p1: "Publish AWP role statement, execute MOUs with HSO/ARR, build storm threshold protocol.",
                    p2: "Test storm protocol through flood season; pilot renter outreach in 2 high-risk areas.",
                    p3: "Scale renter strategy; evaluate FTE capacity for unhoused population engagement.",
                    p4: "Publish decade-end vulnerable population safety assessment."
                }
            },
            {
                id: "1.6",
                title: "Enhance Community Education and Preparedness",
                wave: 2,
                timeframe: "2027–2030",
                rationale: "Scale Earth Camp/Clean Creek Campus to year-round funding and multilingual reach.",
                keyOutput: "Education Reach Audit & Multilingual Strategy",
                prereqs: ["1.1", "3.1"],
                unlocks: ["1.2", "2.4"],
                phases: {
                    p1: "Audit reach gaps, build multi-year funding case for Earth Camp, design multilingual plan.",
                    p2: "Secure stable multi-year funding for Earth Camp; deliver 6 co-hosted community events.",
                    p3: "Assess reach trends; evaluate Earth Camp as a regional co-hosting model.",
                    p4: "Publish decade-end education impact and community preparedness assessment."
                }
            },
            {
                id: "1.2",
                title: "Create a Permanent Community Advisory Group",
                wave: 2,
                timeframe: "2027–2030",
                rationale: "Standing, compensated advisory body holding decision-making authority and co-creating targets.",
                keyOutput: "CAG Mandate, Charter, Confirmed Budget & Council Resolution",
                prereqs: ["1.1", "W0-06"],
                unlocks: ["2.2", "3.3", "2.6", "3.6"],
                phases: {
                    p1: "Pre-convening listening via Liaison, co-design CAG charter, secure compensation budget, draft Council resolution.",
                    p2: "Recruit & seat CAG, adopt Council resolution, activate equity audits & target co-creation.",
                    p3: "Manage founding cohort transitions; expand scope to 3.3 equity framework and 2.6 GI.",
                    p4: "Co-author community chapter of decade-end performance report (3.6)."
                }
            },
            {
                id: "1.8",
                title: "Improve Response and Recovery After Major Storms",
                wave: 2,
                timeframe: "2027–2030",
                rationale: "External interagency recovery coordination and trauma-informed practice.",
                keyOutput: "Interagency Emergency Agreements & Trauma Training",
                prereqs: ["1.7", "1.5"],
                unlocks: ["2.7", "3.6"],
                phases: {
                    p1: "Formalize coordination agreements with HSEM/AFD/HSO, deliver trauma-informed training.",
                    p2: "Run active recovery network; establish staff mental health debrief protocols.",
                    p3: "Expand trauma-informed training to all emergency staff; update recovery protocols.",
                    p4: "Publish decade-end response and recovery assessment."
                }
            },
            {
                id: "2.8",
                title: "Collaborate to Promote Responsible Development",
                wave: 2,
                timeframe: "2027–2030",
                rationale: "Clear WHF-grounded environmental expectations and override tracking for developers.",
                keyOutput: "Development Guidance Document & Compliance Tracker",
                prereqs: ["2.1"],
                unlocks: ["2.7", "2.4"],
                phases: {
                    p1: "Translate WHF into developer guidance, build compliance tracking system, execute AWP-DSD protocol.",
                    p2: "Audit internal review consistency; require mandatory rationale for DSD overrides.",
                    p3: "Feed 2 years of compliance trend data into 2.7 policy work; launch public compliance tool.",
                    p4: "Publish 10-year compliance trend assessment and DSD relationship quality review."
                }
            },
            {
                id: "2.5",
                title: "Implement a Proactive Approach to Infrastructure",
                wave: 3,
                timeframe: "2029–2032",
                rationale: "Funded standing proactive maintenance tier in CIP to break reactive cycle.",
                keyOutput: "Proactive CIP Program Designation & Full Inspection Cycle",
                prereqs: ["2.3", "2.1", "2.2", "3.2"],
                unlocks: ["2.6", "3.6"],
                phases: {
                    p1: "Designate proactive CIP tier, establish equity criteria for proactive project selection.",
                    p2: "Achieve full inspection coverage across ponds, drains, and channels.",
                    p3: "Direct proactive spending toward highest deferred-maintenance SVI areas.",
                    p4: "Publish decade-end reactive-to-proactive ratio shift assessment."
                }
            },
            {
                id: "3.4",
                title: "Address and Repair Past Environmental Harms",
                wave: 3,
                timeframe: "2029–2032",
                rationale: "Specific, accountable program to inventory and repair historical environmental damage.",
                keyOutput: "Formal Harm Inventory & First Priority Site Repair",
                prereqs: ["1.4", "2.1", "3.3", "1.2"],
                unlocks: ["3.6"],
                phases: {
                    p1: "Produce formal inventory of documented harms; review draft with CAG.",
                    p2: "Engage affected communities in co-designing repair for 3–5 priority sites.",
                    p3: "Fund and begin physical repair at highest-priority site.",
                    p4: "Publish public accountability record and community co-authored evaluation."
                }
            },
            {
                id: "3.7",
                title: "Cultivate a Balanced and Proactive Work Culture",
                wave: 3,
                timeframe: "2029–2032",
                rationale: "Transparent priority setting, field staff decision inclusion, and health tracking.",
                keyOutput: "Published Priority Criteria & 2nd DMF Assessment",
                prereqs: ["1.3", "3.2"],
                unlocks: ["3.8"],
                phases: {
                    p1: "Publish transparent priority-setting criteria; establish field staff inclusion mechanisms.",
                    p2: "Implement leadership communication playbook for reorgs/transitions.",
                    p3: "Conduct 2nd department-wide organizational health survey (DMF baseline comparison).",
                    p4: "Publish decade-end culture trend analysis."
                }
            },
            {
                id: "2.7",
                title: "Interdepartmental Innovation Collaboratives",
                wave: 3,
                timeframe: "2029–2032",
                rationale: "Formal cross-departmental partnerships around data, emergency, and climate.",
                keyOutput: "Shared Data Products & Joint Emergency Protocol",
                prereqs: ["2.3", "3.5", "2.8", "1.7"],
                unlocks: ["2.6", "3.8"],
                phases: {
                    p1: "Secure ACM sponsorship; launch shared data network with Demographer, ACAR, APH.",
                    p2: "Activate flood emergency collaborative with HSEM/AFD.",
                    p3: "Activate development policy collaborative with DSD/Housing/Planning.",
                    p4: "Publish annual collaborative outputs record and durability assessment."
                }
            },
            {
                id: "3.8",
                title: "Maintain and Share Knowledge",
                wave: 4,
                timeframe: "2031–2035",
                rationale: "Capture tacit institutional knowledge, build off-boarding procedures and library.",
                keyOutput: "Consolidated Cross-Divisional Knowledge Library & R2R Retrospective",
                prereqs: ["3.7", "2.7", "1.3"],
                unlocks: ["3.6"],
                phases: {
                    p1: "Audit knowledge documentation gaps across all divisions.",
                    p2: "Establish department-wide knowledge standard and off-boarding procedure.",
                    p3: "Consolidate distributed knowledge into searchable central library.",
                    p4: "Produce structured R2R Decade Retrospective for next planning cycle."
                }
            },
            {
                id: "3.6",
                title: "Report Our Performance and Progress",
                wave: 4,
                timeframe: "2031–2035",
                rationale: "Comprehensive, transparent public reporting co-authored with the CAG.",
                keyOutput: "Decade-End Public Performance Report (with CAG Chapter)",
                prereqs: ["2.2", "3.1", "3.5", "1.2", "3.3"],
                unlocks: ["Next Decade Plan"],
                phases: {
                    p1: "Compile decade-long tracking dataset across all commitments.",
                    p2: "Convene CAG to draft and publish unedited Community Chapter.",
                    p3: "Publish Decade-End Performance Report in multiple languages.",
                    p4: "Present findings in public session to City Council and community."
                }
            },
            {
                id: "2.4",
                title: "Deliver Clear, Actionable Data to the Public",
                wave: 4,
                timeframe: "2031–2035",
                rationale: "Public data tools answering resident questions (311 tracking, water quality).",
                keyOutput: "Public Data Tool Suite (311 Tracker, Quality Map)",
                prereqs: ["2.3", "2.2", "1.1", "2.8"],
                unlocks: ["3.6"],
                phases: {
                    p1: "Conduct community research to identify top public data questions.",
                    p2: "Build public tools (311 issue tracker, water quality map, investment map).",
                    p3: "Establish multilingual non-digital access pathways.",
                    p4: "Conduct annual tool usage and feedback evaluation."
                }
            },
            {
                id: "2.6",
                title: "Support Community-Designed Green Infrastructure",
                wave: 4,
                timeframe: "2031–2035",
                rationale: "Co-designed neighborhood green infrastructure with documented stewardship.",
                keyOutput: "2-3 Completed GI Projects with Community Stewardship Agreements",
                prereqs: ["2.1", "2.3", "2.5", "1.2", "2.7", "3.3"],
                unlocks: ["Next Decade Plan"],
                phases: {
                    p1: "Conduct co-design process in 2-3 equity priority neighborhoods.",
                    p2: "Assess community stewardship capacity and build support agreements.",
                    p3: "Construct projects with signed stewardship agreements.",
                    p4: "Conduct 1, 3, and 5-year post-completion environmental monitoring."
                }
            }
        ];

