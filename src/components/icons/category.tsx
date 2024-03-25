import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

function Category({ selected }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-zinc-200 transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-zinc-600',
          { 'dark:!fill-zinc-200 fill-zinc-600 ': selected }
        )}
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-zinc-200 transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-zinc-600',
          { 'dark:!fill-zinc-200 fill-zinc-600': selected }
        )}
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-zinc-200 transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-zinc-600',
          { 'dark:!fill-zinc-200 fill-zinc-600 ': selected }
        )}
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-zinc-300 transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-zinc-300',
          { 'dark:!fill-zinc-600 fill-zinc-300': selected }
        )}
      />
    </svg>
  )
}

export default Category
