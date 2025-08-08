import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to eRealtor</h1>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">
              <a>Go to Dashboard</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
