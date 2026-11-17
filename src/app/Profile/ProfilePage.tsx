import { loggedInProtectedPage } from '@/lib/page-protection';
import AddProfile from '@/components/AddProfile';
import { auth } from '@/lib/auth';

const AddProf = async () => {
  // Protect the page, only logged-in users can access it.
  const session = await auth();
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; name: string };
    } | null,
  );
  return (
    <main>
      <AddProfile />
    </main>
  );
};

export default AddProfile;
