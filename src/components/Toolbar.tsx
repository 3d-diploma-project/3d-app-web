import ButtonWithTitle from '@/components/ButtonWithTitle'
import ColorPicker from '@/components/ColorPicker'
import SwitchWithTitle from '@/components/SwitchWithTitle'
import TitleWithCoodinates from '@/components/TitleWithCoodinates'
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux.ts'
import { setDisplayNodeIndices } from '@/redux/slices/modelSlice.ts'
import { useTranslation } from 'react-i18next'

const Toolbar = () => {
  const dispatch = useAppDispatch()
  const { displayNodeIndices } = useAppSelector((store) => store.model)

  const { t } = useTranslation()

  return (
    <div className="absolute right-14 z-10 flex max-h-full select-none flex-col gap-3 overflow-y-auto rounded-3xl p-3 py-10 shadow-md backdrop-blur-sm">
      <TitleWithCoodinates title={t('toolbar.toolbarSections.coordinates')} />
      <TitleWithCoodinates title={t('toolbar.toolbarSections.rotation')} />

      <ColorPicker title={t('toolbar.toolbarSections.background')} />
      <ColorPicker title={t('toolbar.toolbarSections.modelColor')} />
      <ColorPicker title={t('toolbar.toolbarSections.nodesColor')} />

      <SwitchWithTitle label={t('toolbar.toolbarSections.switchSection.nodes')} id="faces" />
      <SwitchWithTitle
        label={t('toolbar.toolbarSections.switchSection.nodeNumbers')}
        id="face-numbers"
        onClick={() => dispatch(setDisplayNodeIndices(!displayNodeIndices))}
      />
      <SwitchWithTitle label={t('toolbar.toolbarSections.switchSection.legend')} id="legend" />

      <ButtonWithTitle
        title={t('toolbar.toolbarSections.buttonsSection.nodeStress')}
        buttonText={t('toolbar.toolbarSections.buttonsSection.fileUpload')}
      />
      <ButtonWithTitle
        title={t('toolbar.toolbarSections.buttonsSection.nodeDisplacement')}
        buttonText={t('toolbar.toolbarSections.buttonsSection.fileUpload')}
      />
      <ButtonWithTitle
        variant="ghost"
        title={t('toolbar.toolbarSections.buttonsSection.nodeForces')}
        buttonText="file.txt"
      />
      <ButtonWithTitle buttonText={t('toolbar.toolbarSections.buttonsSection.fileUpload')} />
      <ButtonWithTitle
        title={t('toolbar.toolbarSections.buttonsSection.nodeFixes')}
        buttonText={t('toolbar.toolbarSections.buttonsSection.fileUpload')}
      />
    </div>
  )
}

export default Toolbar
