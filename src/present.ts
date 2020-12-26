export class Present
{
    private readonly _name:string;

    private constructor(name: string)
    {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    public static Bicycle = () => new Present("Brand new bicycle.");
    public static Mobile = () => new Present("Iphone 11 pro max.");
    public static Book = () => new Present("A brief history of humankind (book).");
}