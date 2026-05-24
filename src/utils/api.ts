const API_BASE = import.meta.env.PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export interface Agent {
  id: string;
  agent_name: string;
  display_name: string | null;
  description: string | null;
  category: string | null;
  website_url: string | null;
  twitter_url?: string | null;
  github_url?: string | null;
  docs_url?: string | null;
  view_count: number;
  is_verified: boolean;
  is_featured: boolean;
}

export async function getAgents(category?: string): Promise<Agent[]> {
  const url = category
    ? `${API_BASE}/agents?category=${category}&limit=50`
    : `${API_BASE}/agents?limit=50`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch agents');
  return res.json();
}

export async function getFeaturedAgents(): Promise<Agent[]> {
  const res = await fetch(`${API_BASE}/agents/featured`);
  if (!res.ok) throw new Error('Failed to fetch featured');
  return res.json();
}

export async function getAgentDetail(agentName: string): Promise<Agent> {
  const res = await fetch(`${API_BASE}/agents/${agentName}`);
  if (!res.ok) throw new Error('Agent not found');
  return res.json();
}

export async function registerAgent(agentData: object) {
  const res = await fetch(`${API_BASE}/agents/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(agentData),
  });
  return res.json();
}
