import { CoreEditorQuery, DeepPartial, Direction, EdgeDirection, EditorState, HorizontalGuideline, SidebarType, VerticalGuideline } from '../types';
import { BoxData, BoxSize, CursorPosition, Delta, FontData, LayerComponentProps, LayerId, PageSize, SerializedLayer, SerializedLayerTree, SerializedPage } from '@lidojs/core';
import { TextEditor } from '../common/text-editor/interfaces';
export declare const ActionMethods: (state: EditorState, query: CoreEditorQuery) => {
    setProp<T extends LayerComponentProps>(pageIndex: number, layerId: LayerId | LayerId[], props: DeepPartial<T>, customizer?: ((objVal: unknown, srcVal: unknown) => unknown) | undefined): void;
    moveSelectedLayers: (direction: EdgeDirection, value: number) => void;
    changePageSize: (size: PageSize) => void;
    setScale: (scale: number) => void;
    setGuideline: ({ vertical, horizontal, }: {
        vertical: VerticalGuideline[];
        horizontal: HorizontalGuideline[];
    }) => void;
    selectLayers(pageIndex: number, layerIds: LayerId | LayerId[], type?: 'replace' | 'add'): void;
    selectAllLayers: () => void;
    resetSelectLayer: () => void;
    hoverLayer: (pageIndex: number, layerId: LayerId | null) => void;
    setAlign(alignment: 'left' | 'right' | 'center' | 'top' | 'bottom' | 'middle'): void;
    setTextEditor: (pageIndex: number, layerId: LayerId, editor: TextEditor) => void;
    setData: (serializedPages: SerializedPage[]) => void;
    setPage: (pageIndex: number, serializedPage: SerializedPage) => void;
    setActivePage(pageIndex: number): void;
    deleteLayer: (pageIndex: number, layerId: LayerId | LayerId[]) => void;
    openTextEditor(pageIndex: number, layerId: LayerId): void;
    setOpeningEditor(editor: TextEditor): void;
    closeTextEditor(): void;
    lockPage: (pageIndex: number) => void;
    unlockPage: (pageIndex: number) => void;
    deletePage: (pageIndex: number) => void;
    duplicatePage(pageIndex: number): void;
    addPage: (pageIndex?: number) => void;
    movePageUp: (pageIndex: number) => void;
    movePageDown: (pageIndex: number) => void;
    lock: (pageIndex: number, layerId: LayerId | LayerId[]) => void;
    unlock: (pageIndex: number, layerId: LayerId | LayerId[]) => void;
    ungroup(layerId: LayerId): string[];
    group(layerIds: LayerId[]): string;
    bringToFront: (pageIndex: number, layerId: LayerId | LayerId[]) => void;
    bringForward: (pageIndex: number, layerId: LayerId | LayerId[]) => void;
    sendToBack: (pageIndex: number, layerId: LayerId | LayerId[]) => void;
    sendBackward: (pageIndex: number, layerId: LayerId | LayerId[]) => void;
    setFontList(list: FontData[]): void;
    appendFontList(list: FontData[]): void;
    addLayer(serializedLayer: Pick<SerializedLayer, 'type' | 'props'>, parentId?: LayerId): void;
    addShapeLayer(serializedLayer: Pick<SerializedLayer, 'type' | 'props'>, parentId?: LayerId): void;
    addImageLayer({ thumb, url }: {
        url: string;
        thumb: string;
    }, boxSize: BoxSize, parentId?: LayerId): void;
    addSvgLayer(url: string, boxSize: BoxSize, element: HTMLElement, parentId?: LayerId): void;
    addFrameLayer(boxSize: BoxSize, clipPath: string, parentId?: LayerId): void;
    addLayerTree({ layers, rootId }: SerializedLayerTree): void;
    addLayerTrees(data: SerializedLayerTree[]): {
        id: string;
        data: import("../types").LayerData<LayerComponentProps>;
    }[];
    showContextMenu: ({ clientX, clientY }: CursorPosition) => void;
    hideContextMenu: () => void;
    setSelectData: (status: boolean) => void;
    setResizeData: (status: boolean, layerIds?: LayerId[], direction?: Direction, rotate?: number, boxSize?: BoxSize, cursor?: CursorPosition) => void;
    setRotateData: (status: boolean, rotate?: number) => void;
    setDragData: (status: boolean, layerIds?: LayerId[]) => void;
    setControlBox: (data?: BoxData) => void;
    setSidebar: (sidebar?: SidebarType) => void;
    openImageEditor(pageIndex: number, layerId: LayerId, { boxSize, position, rotate, image, }: {
        position: Delta;
        rotate: number;
        boxSize: BoxSize;
        image: {
            url: string;
            position: Delta;
            rotate: number;
            boxSize: BoxSize;
        };
    }): void;
    updateImageEditor(data: DeepPartial<{
        position: Delta;
        rotate: number;
        boxSize: BoxSize;
        image: {
            url: string;
            position: Delta;
            rotate: number;
            boxSize: BoxSize;
        };
    }>): void;
    closeImageEditor(): void;
};
