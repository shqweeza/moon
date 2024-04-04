import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
    return (
        <>
            <h1>Hi! My name is Shaqweeza and I'm currently a first year student majoring in Informations System :3</h1>
            <h2> I am from Malaysia and I can speak 3 languages including Korean even though I still quiet bad at it:( </h2>
            <Image src="/images/kl.jpg" width={500} height={300} />
            <h3>
                <Link href="/">Back to main menu</Link>
            </h3>
        </>
    );
}