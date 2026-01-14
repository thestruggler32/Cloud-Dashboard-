export interface Alert {
    id: string;
    title: string;
    severity: "critical" | "high" | "medium" | "low";
    timestamp: string;
    status: "open" | "investigating" | "resolved" | "fp";
    classification: "TP" | "FP" | "BP";
    confidence: number;
    source: string;
}

export const MOCK_ALERTS: Alert[] = [
    {
        id: "ALT-2024-001",
        title: "Anomalous Login from Rare Location",
        severity: "critical",
        timestamp: "10 min ago",
        status: "open",
        classification: "TP",
        confidence: 98.5,
        source: "Identity Protection",
    },
    {
        id: "ALT-2024-002",
        title: "Suspicious PowerShell Execution",
        severity: "high",
        timestamp: "25 min ago",
        status: "investigating",
        classification: "TP",
        confidence: 92.1,
        source: "Endpoint Detection",
    },
    {
        id: "ALT-2024-003",
        title: "S3 Bucket Public Access Change",
        severity: "medium",
        timestamp: "1 hour ago",
        status: "resolved",
        classification: "FP",
        confidence: 88.4,
        source: "CloudTrail",
    },
    {
        id: "ALT-2024-004",
        title: "Port 22 SSH Exposed to Internet",
        severity: "high",
        timestamp: "2 hours ago",
        status: "open",
        classification: "TP",
        confidence: 99.9,
        source: "Network Watcher",
    },
    {
        id: "ALT-2024-005",
        title: "Mass Delete of VM Scale Set",
        severity: "critical",
        timestamp: "3 hours ago",
        status: "investigating",
        classification: "TP",
        confidence: 95.0,
        source: "Activity Log",
    },
];

export const MOCK_METRICS = {
    totalAlerts: 1248,
    truePositives: 142,
    falsePositives: 856,
    benignPositives: 250,
    activeThreats: 12,
    mttr: "14m",
    autoTriageRate: "89%",
    lastScan: "2 mins ago",
};

export const RECENT_ACTIVITY = [
    { time: "2m ago", action: "Auto-blocked IP 192.168.1.105", type: "success" },
    { time: "15m ago", action: "Analyst assigned to ALT-2024-002", type: "neutral" },
    { time: "1h ago", action: "Policy 'Storage-01' updated", type: "warning" },
];
