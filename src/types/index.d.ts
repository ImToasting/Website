export interface Project {
    yearStart: number,
    yearEnd: number,
    title: string,
    description: string
    row: number,
    color: string,
    website?: string,
    github?: string,
}

export interface Key {
    key: string,
    className?: string
}

export interface MenuItem {
    name: string,
    value: string
}