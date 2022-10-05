
export default function Category({category:{id,title,image}}) {
    return (
        <a href="" className="flex flex-col gap-y-2 group items-center text-center p-4 transition-all hover:bg-purple-50">
            <img src={image} alt={title} className="h-12 w-12 rounded  border border-gray-200" />
            <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight">{title}</span>
        </a>
    );
}

