export type Priority = 'low' | 'medium' | 'high';
export type TaskStatus = 'todo' | 'in-progress' | 'completed';

export interface Task {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    status: TaskStatus;
    assigneeId: string | null;
    dueDate: string;
    createdAt: string;
    updatedAt: string;
}