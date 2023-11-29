import { useAuth } from 'hooks';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 48,
    textAlign: 'center',
    color: '#7EB101',
  },
};

export default function Home() {
  const { user } = useAuth();
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to your personal phonebook {user.name}
      </h1>
    </div>
  );
}
