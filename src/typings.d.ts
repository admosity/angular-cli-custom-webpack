/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// required for custom imports of different file types
declare module '*';
