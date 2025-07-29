import { PageProps } from "@/.next/types/app/page";
import React from "react";

interface UserDetailsPageProps extends PageProps {
  params: Promise<{ userId: string }>;
}

export default async function UserDetailsPage({
  params,
}: UserDetailsPageProps) {
  const { userId } = await params;
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Overview</h1>
      <section className="bg-white shadow rounded p-4">
        <p>
          <strong>User ID:</strong> {userId}
        </p>
        {/* Add more user details here */}
        <p className="text-gray-500 mt-2">
          More user information will appear here.
        </p>
      </section>
    </main>
  );
}
