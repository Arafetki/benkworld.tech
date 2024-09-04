import {Icons} from '@/components/icons';

export default function UnderConstruction() {

    return (

        <div className='flex flex-col items-center gap-3'>
            <Icons.construction className='size-24 lg:size-32'/>
            <h1 className='text-3xl lg:text-5xl'>Under Construction</h1>
        </div>
    );
}