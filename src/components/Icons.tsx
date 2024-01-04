import { LucideProps } from 'lucide-react'
import Image from 'next/image'
export const Icons = {
  logo: (props: LucideProps) => (
    <Image {...props as any} 
      src='/icon.png'
      width='150'
      height='150'
      alt='DigitalMali'
    />
  ),
}
