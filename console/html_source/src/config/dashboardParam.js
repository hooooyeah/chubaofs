export default {
  roleParam: ['fuseClient', 'metaNode', 'dataNode', 'objectNode', 'master'],
  metaNodeParam: ['OpMetaCreateInode', 'OpMetaLinkInode', 'OpMetaUnlinkInode', 'OpMetaInodeGet', 'OpMetaEvictInode', 'OpMetaSetattr', 'OpMetaCreateDentry', 'OpMetaDeleteDentry', 'OpMetaUpdateDentry', 'OpMetaReadDir', 'OpMetaNodeHeartbeat', 'OpMetaExtentsAdd', 'OpMetaExtentsList', 'OpMetaExtentsDel', 'OpMetaTruncate', 'OpMetaLookup', 'OpDeleteMetaPartition', 'OpUpdateMetaPartition', 'OpMetaBatchInodeGet', 'OpMetaDeleteInode', 'OpMetaBatchExtentsAdd', 'OpMetaSetXAttr', 'OpMetaGetXAttr', 'OpMetaBatchGetXAttr', 'OpMetaRemoveXAttr', 'OpMetaListXAttr', 'OpCreateMultipart', 'OpListMultiparts', 'OpRemoveMultipart', 'OpAddMultipartPart', 'OpGetMultipart', 'OpDecommissionMetaPartition', 'OpCreateMetaPartition'],
  dataNodeParam: ['OpCreateExtent', 'OpWrite', 'OpSyncWrite', 'OpStreamRead', 'OpStreamFollowerRead', 'OpMarkDelete', 'OpRandowWrite', 'OpSyncRandomWrite', 'OpCreateDataPartition', 'OpDeleteDataPartition', 'OpDataNodeHeartbeat', 'OpGetAppliedId', 'OpDecommissionDataPartition', 'OpAddDataPartitionRaftMember', 'OpRemoveDataPartitionRaftMember'],
  objectNodeParam: ['GetObject', 'PutObject', 'CopyObject', 'ListObjects', 'DeleteObject', 'DeleteObjects', 'HeadObject', 'CreateBucket', 'DeleteBucket', 'HeadBucket', 'ListBuckets', 'CreateMultipartUpload', 'ListMultipartUploads', 'UploadPart', 'ListParts', 'CompleteMultipartUpload', 'AbortMultipartUpload', 'GetBucketLocation', 'GetObjectXAttr', 'PutObjectXAttr', 'ListObjectXAttrs', 'DeleteObjectXAttr', 'GetObjectTagging', 'PutObjectTagging', 'DeleteObjectTagging', 'GetBucketTagging', 'PutBucketTagging', 'DeleteBucketTagging', 'Read', 'Write'],
  fuseOpParam: ['mkdir', 'mknod', 'filecreate', 'link', 'symlink', 'rmdir', 'unlink', 'readdir', 'rename', 'fileread', 'filewrite', 'filesync'],
  colorLists: [
    '#B1032E',
    '#F9B100',
    '#2A9720',
    '#0D7981',
    '#1F61A5',
    '#5C409D',
    '#DC1345',
    '#EFC915',
    '#22B514',
    '#1F9098',
    '#2880C2',
    '#6B33E2',
    '#EF3664',
    '#FBDB3F',
    '#2FCE1F',
    '#2BB5C7',
    '#2C92D6',
    '#9F79E6',
    '#E25441',
    '#F9DF00',
    '#51E841',
    '#41CEE2',
    '#35B0F4',
    '#8C6CF2',
    '#F5705F',
    '#F2EC93',
    '#AEF1A9',
    '#64D6E3',
    '#46BCFB',
    '#7B5FD4',
    '#F58C5F',
    '#F0F79F',
    '#C9FFC5',
    '#90E4EA',
    '#6AC7F6',
    '#C457D9'
  ]
}
