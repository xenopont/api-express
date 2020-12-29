export default async (ms: number): Promise<void> => new Promise<void>((resolve: () => void) => setTimeout(() => resolve(), ms))
