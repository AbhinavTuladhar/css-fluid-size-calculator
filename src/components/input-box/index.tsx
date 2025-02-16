import { FC, PropsWithChildren } from 'react'

const InputBox: FC<PropsWithChildren> = ({ children }) => (
  <div className="border-border flex flex-col gap-y-2 rounded-lg border p-4">{children}</div>
)

export default InputBox
