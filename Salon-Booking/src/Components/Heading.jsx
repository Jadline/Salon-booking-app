import clsx from 'clsx'

export function Heading({ className, level = 1, ...props }) {
  let Element = `h${level}`

  return (
    <Element
      {...props}
      className={clsx(className, ' font-semibold  sm:text-xl/8')}
    />
  )
}

export function Subheading({ className, level = 2, ...props }) {
  let Element = `h${level}`

  return (
    <Element
      {...props}
      className={clsx(className, 'text-base/7 font-semibold sm:text-sm/6')}
    />
  )
}
