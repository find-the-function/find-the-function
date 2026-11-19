import { loggedInProtectedPage } from '@/lib/page-protection';
import { auth } from '@/lib/auth';
import Interests from '@/components/Interests';

const InterestsPage = async () => {
  // Protect the page, only logged-in users can access it.
  const session = await auth();
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; name: string };
    } | null,
  );
  return (
    <main>
      <Interests />
    </main>
  );
};

export default InterestsPage;
