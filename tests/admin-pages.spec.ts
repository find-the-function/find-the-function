import { test, expect } from './auth-utils';

test('test access to admin page', async ({ getUserPage }) => {
  test.slow();
  // Call the getUserPage fixture with admin sign-in info to get authenticated session for admin
  const adminPage = await getUserPage('admin@foo.com', 'changeme');

  // Navigate to the home page and wait for post-login indicator
  await adminPage.goto('http://localhost:3000/');
  await expect(
    adminPage.getByRole('button', { name: 'admin@foo.com' })
  ).toBeVisible({ timeout: 10000 });

  // Check for navigation elements
  await expect(
    adminPage.getByRole('link', { name: 'Find the Function' })
  ).toBeVisible({ timeout: 5000 });
  // await expect(
  //   adminPage.getByRole('link', { name: 'Add Stuff' })
  // ).toBeVisible({ timeout: 5000 });
  // await expect(
  //   adminPage.getByRole('link', { name: 'List Stuff' })
  // ).toBeVisible({ timeout: 5000 });
  // await expect(
  //   adminPage.getByRole('link', { name: 'Admin' })
  // ).toBeVisible({ timeout: 5000 });

  // Test Add Stuff adminPage
  // await adminPage.getByRole('link', { name: 'Add Stuff' }).click();
  // await expect(
  //   adminPage.getByRole('heading', { name: 'Add Stuff' })
  // ).toBeVisible({ timeout: 5000 });

  // // Test List Stuff adminPage
  // await adminPage.getByRole('link', { name: 'List Stuff' }).click();
  // await expect(
  //   adminPage.getByRole('heading', { name: 'Stuff' })
  // ).toBeVisible({ timeout: 5000 });

  // Test Admin adminPage
  await adminPage.getByRole('button', { name: 'admin@foo.com' }).click({ timeout: 3000 });
  await adminPage.getByRole('link', { name: 'Admin Dashboard' }).click({ timeout: 3000 });
  await expect(
    adminPage.getByRole('heading', { name: 'Manage events' })
  ).toBeVisible({ timeout: 5000 });
  await expect(
    adminPage.getByRole('heading', { name: 'Manage Users' })
  ).toBeVisible({ timeout: 5000 });

});
