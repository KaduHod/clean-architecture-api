export abstract class isEqual
{
    public static objectToObject<T extends object>(firstObject:T, secondObject:T): boolean
    {
        for (const key of Object.keys(firstObject))
        {   
            if(firstObject[key as keyof T] !== secondObject[key as keyof T])
            {
                return false
            }
        }
        return true
    }
}