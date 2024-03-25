import clsx from 'clsx'
import React from 'react'

type Props = {
  selected: boolean
}

const Payment = ({ selected }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-zinc-200 transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-zinc-600',
          { 'dark:!fill-zinc-200 fill-zinc-600 ': selected }
        )}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 10H2V8H22V10Z"
        className={clsx(
          'dark:group-hover:fill-zinc-600 transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-zinc-300 ',
          { 'dark:!fill-zinc-600 fill-zinc-300 ': selected }
        )}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 15C4 14.4477 4.44772 14 5 14H11C11.5523 14 12 14.4477 12 15C12 15.5523 11.5523 16 11 16H5C4.44772 16 4 15.5523 4 15Z"
        className={clsx(
          'dark:group-hover:fill-zinc-600 transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-zinc-300 ',
          { 'dark:!fill-zinc-600 fill-zinc-300 ': selected }
        )}
      />
    </svg>
  )
}

export default Payment
