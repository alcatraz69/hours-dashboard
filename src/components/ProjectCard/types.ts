export type ProjectCardProps = {
    item : ProjectCardItems;
}

export interface ProjectCardItems {
    label: string;
    value: string;
    icon: React.ReactNode;
  }