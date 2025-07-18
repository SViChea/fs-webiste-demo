import TodoComponent from '@/components/todos/TodoComponent'
import { TodoType } from '@/types/todoType';
import { Metadata } from 'next';
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: "Todos",
  description: "Manage your tasks efficiently with our Todo application.",
  openGraph: {
    title: "Todos",
    description: "Manage your tasks efficiently with our Todo application.",
    url: "https://sovicheasok.info/todos",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-khGkK1wp8Y_nnP3td7fPv9jzPpb26deWw&s",
        height: 630,
        width: 1200,
        alt: "Open Graph Image",
      }
    ],
    locale: "en_US",
    type: "website",
  }
}

async function getTodo(): Promise<TodoType[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}todos`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data.todos as TodoType[];
}

export default function page() {
  const todos = getTodo();
  return (
    <div className='flex justify-center items-center h-screen'>
      <Suspense fallback={<div>Loading...</div>}>
      <TodoComponent
        todos={todos}
      /></Suspense>
    </div>
  )
}
