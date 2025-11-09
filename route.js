// src/app/tickets/route.js 

export async function GET() {
    const tickets = [
        {
            id: 't-1001',
            title: 'Cannot connect to VPN',
            description: 'User reports intermittent VPN connectivity errors.',
            priority: 'High',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-10-31T14:05:00Z'
        },
        {
            id: 't-1011',
            title: 'Email not syncing on mobile',
            description: "Exchange email not updating on user's phone.",
            priority: 'Medium',
            status: 'In Progress',
            assignee: 'Alex Martinez',
            updatedAt: '2025-10-30T09:22:00Z'
        },
        {
            id: 't-1005',
            title: 'Printer offline in office 3B',
            description: 'Network printer shows as offline intermittenly.',
            priority: "Low",
            status: "Resolved",
            assignee: 'Jordan Kilganon',
            updatedAt: '2025-10-25T16:45:00Z'
        },
        {
            id: 't-1003',
            title: "Slow system performance",
            description: 'User reports frequent lag when opening applications.',
            priority: 'High',
            status: 'On Hold',
            assignee: "Unassigned",
            updatedAt: '2025-10-29T11:10:00Z'
        },
        {
            id: 't-1034',
            title: 'Software installation request',
            description: 'User requested installation of Adobe Acrobat Pro.',
            priority: 'Low',
            status: 'Open',
            assignee: 'Evan Anderson',
            updatedAt: '2025-11-01T08:30:00Z'
        },
        {
            id: 't-1006',
            title: 'Forgot password - unable to login',
            description: 'User forget login credentials for system portal.',
            priority: 'Medium',
            status: 'Resolved',
            assignee: 'IT Support',
            updatedAt: '2025-10-28T15:14:00Z'
        },
        {
            id: 't-1008',
            title: 'Network outage - building 2',
            description: 'No internet connectivity reported across multiple rooms.',
            priority: 'Critical',
            status: 'In Progress',
            assignee: 'Network Admin',
            updatedAt: '2025-11-02T13:55:00Z'
        },
        {
            id: 't-1077',
            title: 'Monitor flickering issue',
            description: 'Display flickers when brightness is adjusted.',
            priority: 'Low',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-10-31T09:15:00Z'
        },
        {
            id: 't-1099',
            title: 'Server backup failed',
            description: 'Nightly backup did not complete successfully.',
            priority: 'Critical',
            status: 'Open',
            assignee: 'Admin Team',
            updatedAt: '2025-11-03T02:45:00Z'
        },
        {
            id: 't-1069',
            title: 'New user setup - HR department',
            description: 'Provision account, email, and access permissions for new employee.',
            priority: 'Medium',
            status: 'In Progress',
            assignee: 'Sam Tramp',
            updatedAt: "2025-10-30T17:40:00Z"
        },
        {
            id: 't-1045',
            title: 'Antivirus alert on workstation',
            description: 'Malware detected, quarantined by endpoint security.',
            priority: 'High',
            status: 'Resolved',
            assignee: 'Security Team',
            updatedAt: '2025-10-29T20:20:00Z'
        },
        {
            id: 't-1038',
            title: 'Update Windows security patches',
            description: 'Monthly patch deployment pending approval.',
            priority: 'On Hold',
            assignee: 'Unassigned',
            updatedAt: '2025-10-28T09:50:00Z'
        },
        {
            id: 't-1013',
            title: 'VoIP phone not working',
            description: 'User unable to make outbound calls.',
            priority: 'High',
            status: 'In Progress',
            assignee: 'Telecom Support',
            updatedAt: '2025-11-01T12:30:00Z'
        },
        {
            id: 't-1014',
            title: 'Request for admin access',
            description: 'Team lead requests temporary elevated permissions.',
            priority: 'Low',
            status: 'On Hold',
            assignee: 'Admin Review',
            updatedAt: '2025-11-02T08:00:00Z'
        }
    ];
    return Response.json(tickets);
} 
