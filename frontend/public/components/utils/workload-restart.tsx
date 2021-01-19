import * as React from 'react';
import { Alert, AlertActionLink } from '@patternfly/react-core';

import { K8sKind, k8sPatch, K8sResourceKind } from '../../module/k8s/index';

export const restart = (model: K8sKind, obj: K8sResourceKind) => {
  const patch = [
    {
      path: '/spec/template/metadata/labels/timestamp',
      op: 'replace',
      value: Date.now().toString(),
    },
  ];

  return k8sPatch(model, obj, patch);
};

export const WorkloadRestartedAlert = ({ model, obj }) => {
  return (
    <Alert
      isInline
      className="co-alert"
      variant="info"
      title={<>{obj.metadata.name} is restarted</>}
      // actionLinks={
      //   <AlertActionLink
      //     onClick={() =>
      //       restart(model, obj).catch((err) => errorModal({ error: err.message }))
      //     }
      //   >
      //     Resume Rollouts
      //   </AlertActionLink>
      // }
    >
      This will redeploy all existing pods.
    </Alert>
  );
};
