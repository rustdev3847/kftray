import { RefObject } from 'react'

export interface Status {
  id: number
  service: string
  context: string
  local_port: number
  isRunning: boolean
  namespace: string
  remote_port: number
  workload_type: string
  protocol: string
  alias: string
  remote_address: string
  cancelRef?: RefObject<HTMLButtonElement>
}

export interface Config {
  id: number
  service: string
  namespace: string
  local_port: number
  remote_port: number
  context: string
  alias: string
  remote_address: string
  workload_type: string
  protocol: string
}

export interface Response {
  id: number
  service: string
  context: string
  local_port: number
  status: number
  namespace: string
  remote_port: number
  alias: string
  workload_type: string
  protocol: string
  remote_address: string
  stdout: string
  stderr: string
}

export interface GitConfig {
  repoUrl: string
  configPath: string
  isPrivate: boolean
  token: string
  flush: boolean
}

export interface ConfigProps {
  isModalOpen: boolean
  closeModal: () => void
  newConfig: Config
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSaveConfig: (e: React.FormEvent) => Promise<void>
  handleEditSubmit: (e: React.FormEvent) => Promise<void>
  cancelRef: RefObject<HTMLElement>
  isEdit: boolean
}

export interface SettingsModalProps {
  isSettingsModalOpen: boolean
  closeSettingsModal: () => void
  onSettingsSaved: () => void
  credentialsSaved: boolean
  setCredentialsSaved: React.Dispatch<React.SetStateAction<boolean>>
}

export interface TableProps {
  configs: Status[]
  isInitiating: boolean
  isStopping: boolean
  isPortForwarding: boolean
  initiatePortForwarding: (configs: Status[]) => Promise<void>
  stopPortForwarding: (configs: Status[]) => Promise<void>
  confirmDeleteConfig: () => void
  handleDeleteConfig: (id: number) => void
  handleEditConfig: (id: number) => void
  isAlertOpen: boolean
  setIsAlertOpen: (isOpen: boolean) => void
  isBulkAlertOpen: boolean
  setIsBulkAlertOpen: (isOpen: boolean) => void
  updateConfigRunningState: (id: number, isRunning: boolean) => void
  selectedConfigs: Status[]
  setSelectedConfigs: React.Dispatch<React.SetStateAction<Status[]>>
  confirmDeleteConfigs: () => void
  handleDeleteConfigs: (ids: number[]) => void
}

export interface PortForwardRowProps {
  config: Status
  confirmDeleteConfig: () => void
  handleDeleteConfig: (id: number) => void
  handleEditConfig: (id: number) => void
  isAlertOpen: boolean
  setIsAlertOpen: (isOpen: boolean) => void
  updateConfigRunningState: (id: number, isRunning: boolean) => void
  showContext?: boolean
  onSelectionChange: (isSelected: boolean) => void
  updateSelectionState: (id: number, isRunning: boolean) => void
  selected: boolean
  isInitiating: boolean
  isStopping: boolean
}

export interface MenuProps {
  openModal: () => void
  openSettingsModal: () => void
  handleExportConfigs: () => void
  handleImportConfigs: () => void
  credentialsSaved: boolean
  setCredentialsSaved: React.Dispatch<React.SetStateAction<boolean>>
  onConfigsSynced: () => void
  isSettingsModalOpen: boolean
}

export interface SyncConfigsButtonProps {
  serviceName: string
  accountName: string
  onConfigsSynced?: () => void
  onSyncFailure?: (error: Error) => void
  credentialsSaved: boolean
  setCredentialsSaved: React.Dispatch<React.SetStateAction<boolean>>
  isSettingsModalOpen: boolean
}
